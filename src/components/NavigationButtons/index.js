import React, { Component } from "react";
import './styles.css'

class NavigationButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <div>
                <input type="button" class="back-button" defaultValue="Back"></input>
                <input type="button" class="next-button" defaultValue="Next"></input>

            </div>
        );
    }

}
export default (NavigationButtons);