import React, { Component } from "react"
import './styles.css';
import NavigationButtons from './../NavigationButtons';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <div>
            <div class='user-profile'>
                <h3>USER PROFILE</h3>
                <p class="subtext">LET'S GET DOWN WITH THE BASICS.</p>
                </div>
                <div class="nav-buttons">
                    <NavigationButtons></NavigationButtons>
                </div>
            </div>

        );
    }

}
export default (UserProfile);