import React, { Component } from 'react'
import NavigationButtons from './../NavigationButtons'
import WhatsYourName from '../WhatsYourName/index'

import './styles.css'

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    console.log(window.location.pathname)
    return (
      <div>
        <div className="user-profile">
          <h3>USER PROFILE</h3>
          <p className="subtext">LET'S GET DOWN WITH THE BASICS.</p>
        </div>
        <div>
          <WhatsYourName />
        </div>
        <div className="nav-buttons">
          <NavigationButtons />
        </div>
      </div>
    )
  }
}
export default UserProfile
