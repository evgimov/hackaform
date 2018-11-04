import React from 'react'
import { Router, Redirect } from '@reach/router'
import Login from './login'
import Dashboard from './dashboard'
import PrivateComponent from '../../components/PrivateComponent'
import Skill from './Skill'
import Role from './Role'

export default () => (
  <Router basepath="/app">
    <Login path="/login" />
    <PrivateComponent path="/dashboard" component={Dashboard} />
    <PrivateComponent path="/skills" component={Skill} />
    <PrivateComponent path="/role" component={Role} />
  </Router>
)
