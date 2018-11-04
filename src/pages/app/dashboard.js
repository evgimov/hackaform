import React from 'react'
import { navigate } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

export default () => (
  <div>
    <h1>Dashboard</h1>
    <button
      onClick={() => {
        netlifyIdentity.logout()
        window.sessionStorage.removeItem('AUTH_KEY')
        navigate('/app/login')
      }}
    >
      LOGOUT
    </button>
  </div>
)
