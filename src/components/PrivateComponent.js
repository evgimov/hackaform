import React from 'react'
import { Redirect } from '@reach/router'

export default function PrivateComponent({
  path,
  component: Component,
  ...rest
}) {
  const { authedUser } = JSON.parse(
    window.sessionStorage.getItem('AUTH_KEY')
  ) || { authedUser: null }

  return authedUser !== null ? (
    <Component path={path} {...rest} />
  ) : (
    <Redirect to="/app/login" noThrow />
  )
}
