import React from 'react'
import { Redirect } from '@reach/router'

class PrivateComponent extends React.Component {
  componentDidMount() {
    const sessionStorage =
      typeof window !== 'undefined' && window.sessionStorage
    const { authedUser } = JSON.parse(sessionStorage.getItem('AUTH_KEY')) || {
      authedUser: null,
    }
    this.authedUser = authedUser
  }

  render() {
    const { path, component: Component, ...rest } = this.props
    return this.authedUser !== null ? (
      <Component path={path} {...rest} />
    ) : (
      <Redirect to="/app/login" noThrow />
    )
  }
}

export default PrivateComponent
