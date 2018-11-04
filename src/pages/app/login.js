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

    return (
      <div className="signup">
        <div className="signupHeaderTitle">
          <h1 className="SignupTitle black big">
            <span>Hacka</span>
            form
          </h1>
          <h3 className="SignupSubtitle black big">Build your dream team</h3>
          <button
            className="btn hackbutton"
            onClick={() => netlifyIdentity.open()}
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Login
