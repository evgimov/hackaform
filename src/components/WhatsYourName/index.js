import React, { Component } from 'react'
import './styles.css'
import { Input, Label } from 'semantic-ui-react'

class WhatsYourName extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="name">
        <Label>Hello! What's your Name?</Label>
        <Input placeholder="Full Name" />
      </div>
    )
  }
}
export default WhatsYourName
