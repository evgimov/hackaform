import React from 'react'
import { Router, Redirect } from '@reach/router'
import Login from './login'
import Dashboard from './dashboard'
import PrivateComponent from '../../components/PrivateComponent'

export default () => (
  <Router basepath="/app">
    <Login path="/login" />
    <PrivateComponent path="/dashboard" component={Dashboard} />
  </Router>
)
