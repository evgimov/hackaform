import React, { Component } from "react";
import './styles.css'
import WhatsYourName from './../WhatsYourName'
class NavigationButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <div>
                <div>
                <WhatsYourName></WhatsYourName>
                </div>
                <input type="button" class="back-button" defaultValue="BACK"></input>
                <input type="button" class="next-button" defaultValue="NEXT"></input>

            </div>
        );
    }

}
export default (NavigationButtons);