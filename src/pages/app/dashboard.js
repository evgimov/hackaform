import React from 'react'
import { navigate } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

const globalWindow = typeof window !== 'undefined' && window

export default () => (
  <div>
    <h1>Dashboard</h1>
    <button
      onClick={() => {
        netlifyIdentity.logout()
        globalWindow.sessionStorage.removeItem('AUTH_KEY')
        navigate('/app/login')
      }}
    >
      LOGOUT
    </button>
  </div>
)
