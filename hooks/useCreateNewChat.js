import { useState } from 'react';



const useCreateNewChat = (token) => {
  const [chatId, setChatId] = useState(null)

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
  return { newChat, chatId }
}

export default useCreateNewChat;