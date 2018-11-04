import React from 'react'
import { Router, Redirect } from '@reach/router'
import Login from './login'
import Dashboard from './dashboard'
import PrivateComponent from '../../components/PrivateComponent'
import Skill from './Skill'
import Role from './Role'
import Layout from '../../components/layout'
import Expertise from './Expertise'
import PredictedTeam from './PredictedTeam'
import GroupContactForm from './GroupContactForm'

export default () => (
  <Layout>
    <Router basepath="/app">
      <Login path="/login" />
      <PrivateComponent path="/" component={Dashboard} />
      <PrivateComponent path="/skills" component={Skill} />
      <PrivateComponent path="/role" component={Role} />
      <PrivateComponent path="/expertise" component={Expertise} />
      <PrivateComponent path="/results" component={PredictedTeam} />
      <PrivateComponent path="/group-form" component={GroupContactForm} />
    </Router>
  </Layout>
)
