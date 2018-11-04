import React, { Component } from "react";
import './styles.css'
class GroupContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <div className="group-contact-form"> 
            <h1>Group Form</h1>
            <form action="https://formspree.io/hackaform@gmail.com" method="POST" netlify>
              <label>Group Name</label><br />
              <input type="text" name="group-name" /><br />
              <label>Team Mates</label><br />
              <input type="text" name="teammate-name" placeholder="Name" /><input type="email" name="teammate-email" placeholder="Email" /><br />
              <input type="text" name="teammate-name" placeholder="Name" /><input type="email" name="teammate-email" placeholder="Email" /><br />
              <input type="text" name="teammate-name" placeholder="Name" /><input type="email" name="teammate-email" placeholder="Email" /><br />
              <input type="text" name="teammate-name" placeholder="Name" /><input type="email" name="teammate-email" placeholder="Email" /><br />
              <input type="text" name="teammate-name" placeholder="Name" /><input type="email" name="teammate-email" placeholder="Email" /><br />
              <label>Project Name</label><br />
              <input type="text" name="prject-name" /><br />
              <label>Project URL</label><br />
              <input type="URL" name="project-url" /><br />
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
        );
    }

}
export default (GroupContactForm);