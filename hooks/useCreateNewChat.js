import { useState } from 'react';



const useCreateNewChat = (token) => {
  const [allMyConversations, setAllMyConversations] = useState(null)
  const [chatId, setChatId] = useState(null)

  //FIRST check if I already have started a conversation with this person:
 const isThreadStarted =(member) => {

    fetch('http://localhost:2428/chats ', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }),
      credentials: 'same-origin'
    })
      .then((res) => res.json())
      .then((data) => {
        setAllMyConversations(data)
      })

    }




  //this creates a new chat, always new chatid(!)
  const newChat = (members) => {
    fetch('http://localhost:2428/chats ', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }),
      body: JSON.stringify({
        members: [`${members}`],
      }),
      credentials: 'same-origin'
    })
      .then((res) => res.json())
      .then((data) => {
        setChatId(data?.id)
        localStorage.setItem('currentChatId', data.id ? data.id : 'undefined');
      })
  }

  return { newChat, chatId, isThreadStarted , allMyConversations}

}

export default useCreateNewChat;