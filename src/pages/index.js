import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SignupHeader from '../components/SignupHeader';
import Skill from '../components/Skill';
import WhatsYourName from '../components/WhatsYourName/index';
import UserProfile from '../components/UserProfile/index';
import Optional from '../components/Optional';


const IndexPage = () => (
  <Layout>
    <SignupHeader></SignupHeader>

    <UserProfile></UserProfile>
    <Skill></Skill>
    <Optional></Optional>
  </Layout>
)

export default IndexPage

//<UserProfile></UserProfile>
//<Skill></Skill>