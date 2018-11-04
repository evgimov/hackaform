import React from 'react'
import { Router, Redirect } from '@reach/router'
import Login from './login'
import Dashboard from './dashboard'
import PrivateComponent from '../../components/PrivateComponent'
import Skill from './Skill'
import Role from './Role'
import Layout from '../../components/layout'

export default () => (
  <Layout>
    <Router basepath="/app">
      <Login path="/login" />
      <PrivateComponent path="/" component={Dashboard} />
      <PrivateComponent path="/skills" component={Skill} />
      <PrivateComponent path="/role" component={Role} />
    </Router>
  </Layout>
)
