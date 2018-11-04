import React from 'react'
import { navigate } from 'gatsby'
import { Redirect } from '@reach/router'
import netlifyIdentity from 'netlify-identity-widget'

const globalWindow = typeof window !== 'undefined' && window

class Login extends React.Component {
  state = {
    authedUser: null,
  }

  componentDidMount() {
    const { authedUser } = JSON.parse(
      globalWindow.sessionStorage.getItem('AUTH_KEY')
    ) || { authedUser: null }

    if (authedUser === null) {
      // netlifyIdentity.open()
    } else {
      this.setState({ authedUser })
    }

    netlifyIdentity.on('login', user => this.handleLogin(user))
    netlifyIdentity.on('logout', this.handleLogout)
  }

  handleLogout = () => globalWindow.sessionStorage.removeItem('AUTH_KEY')

  handleLogin = authedUser => {
    globalWindow.sessionStorage.setItem(
      'AUTH_KEY',
      JSON.stringify({
        authedUser,
      })
    )

    this.setState({ authedUser }, () => navigate('/app/dashboard'))
  }

  render() {
    const { authedUser } = this.state

    if (authedUser) {
      return <Redirect from="app/login" to="app/dashboard" noThrow />
    }

    return <button onClick={() => netlifyIdentity.open()}>Login</button>
  }
}

export default Login
