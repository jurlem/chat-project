import { useState } from 'react';



const useRefreshToken = (oldToken) => {
  const [newToken, setToken] = useState(null)

  const refreshToken = () => {

    fetch('http://localhost:2428/auth/refresh ', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        token: `${oldToken}`,
      }),
      credentials: 'same-origin'
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.accessToken)
        // setUser(data.user.firstName)
        localStorage.setItem('accessToken', data.accessToken ? data.accessToken : 'undefined');
      })

  }
  return { refreshToken, newToken }
}

export default useRefreshToken