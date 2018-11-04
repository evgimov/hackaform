import React, { Component } from "react";
import './styles.css'
import { Input, Label } from 'semantic-ui-react';

class WhatsYourName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InputText:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
    this.setState( {InputText:event.target.value} );
    console.log(this.state.InputText);
} 

    render() {
        return (
            <div class="name">
            <Label >Hello! What's your Name? </Label>
               <Input type="text" name="InputText" onChange={this.handleInputChange}  placeholder="Full Name" required="required" ></Input>
            </div>
        );
    }

}
export default (WhatsYourName);