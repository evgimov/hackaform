import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SignupHeader from '../components/SignupHeader';
import UserProfile from './../components/UserProfile'
import Footer from './../components/Footer'

const IndexPage = () => (
  <Layout>
    <SignupHeader></SignupHeader>
    <UserProfile></UserProfile>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
