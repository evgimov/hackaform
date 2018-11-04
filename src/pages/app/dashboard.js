import React from 'react'
import { navigate } from 'gatsby'

export default () => (
  <div>
    <h1>Dashboard</h1>
    <button
      onClick={() => {
        window.netlifyIdentity.logout()
        window.sessionStorage.removeItem('AUTH_KEY')
        navigate('/app/login')
      }}
    >
      LOGOUT
    </button>
  </div>
)
