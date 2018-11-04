import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SignupHeader from '../components/SignupHeader'
import Skill from './app/Skill'
import WhatsYourName from '../components/WhatsYourName/index'
import UserProfile from '../components/UserProfile/index'
import Optional from './app/Optional'
import { Redirect } from '@reach/router'

const IndexPage = () => (
  <Layout>
    <Redirect to="/app/login/" />
  </Layout>
)

export default IndexPage

//<UserProfile></UserProfile>
//<Skill></Skill>
