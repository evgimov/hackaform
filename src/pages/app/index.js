import React from 'react'
import { Router, Redirect } from '@reach/router'
import Login from './login'
import Dashboard from './dashboard'
import PrivateComponent from '../../components/PrivateComponent'
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init()

export default () => (
  <Router basepath="/app">
    <Login path="/login" />
    <PrivateComponent path="/dashboard" component={Dashboard} />
  </Router>
)
