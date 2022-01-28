import { useState } from 'react';



const usePostMessageInChat = (token) => {
  const [messageStatus, setMessageStatus] = useState(null)
  const [sentMessage, setSentMessage] = useState(null)

  const postingMessage = async (chatId, message) => {

    await fetch('http://localhost:2428/messages ', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }),
      body: JSON.stringify({
        chatId: `${chatId}`,
        messageString: `${message}`,
      }),
      credentials: 'same-origin'
    })
      .then((res) => res.json())
      .then((data) => {
        setMessageStatus(data?.states)
        setSentMessage(data?.message)
      })
  }
  return { postingMessage, messageStatus, sentMessage }
}

export default usePostMessageInChat;