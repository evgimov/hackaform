import React from 'react'
import { navigate } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'
import UserProfile from '../../components/UserProfile/index'
import SignupHeader from '../../components/SignupHeader'
import NavigationButtons from '../../components/NavigationButtons/index'

const globalWindow = typeof window !== 'undefined' && window

export default () => (
  <div>
    <SignupHeader />
    <UserProfile />
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
