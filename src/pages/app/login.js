import React from 'react'
import { navigate } from 'gatsby'
import { Redirect } from '@reach/router'

class Login extends React.Component {
  componentDidMount() {
    const { authedUser } = JSON.parse(
      window.sessionStorage.getItem('AUTH_KEY')
    ) || { authedUser: null }

    if (authedUser === null) {
      window.netlifyIdentity && window.netlifyIdentity.open()
    }

    window.netlifyIdentity.on('login', user => this.handleLogin(user))
    window.netlifyIdentity.on('logout', this.handleLogout)
  }

  handleLogout = () => window.sessionStorage.removeItem('AUTH_KEY')

  handleLogin = authedUser => {
    window.sessionStorage.setItem(
      'AUTH_KEY',
      JSON.stringify({
        authedUser,
      })
    )

    navigate('/app/dashboard')
  }

  render() {
    const { authedUser } = JSON.parse(
      window.sessionStorage.getItem('AUTH_KEY')
    ) || { authedUser: null }

    if (authedUser) {
      return <Redirect from="app/login" to="app/dashboard" noThrow />
    }

    return <button onClick={() => window.netlifyIdentity.open()}>Login</button>
  }
}

export default Login
