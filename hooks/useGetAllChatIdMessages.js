import { useState } from 'react';


const useGetAllChatIdMessages = (token) => {
  const [messages, setMessages] = useState(null)

  const gettingAllMessage = async (chatId) => {

    await fetch(`http://localhost:2428/messages/${chatId}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }),
      credentials: 'same-origin'
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages(data)
      })
  }
  return { gettingAllMessage, messages }
}

export default useGetAllChatIdMessages;