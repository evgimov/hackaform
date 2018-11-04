import React, { Component } from 'react'
import { Link } from 'gatsby'
import './styles.css'
import WhatsYourName from './../WhatsYourName'
class NavigationButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderPath() {
    switch (window.location.pathname) {
      case '/app/dashboard':
        return (
          <div>
            <Link to="/app/skills">
              <input
                type="button"
                className="next-button"
                defaultValue="NEXT"
              />
            </Link>
          </div>
        )
      case '/app/skills':
        return (
          <div>
            <div>
              <Link to="/app/role">
                <input
                  type="button"
                  className="next-button"
                  defaultValue="NEXT"
                />
              </Link>
            </div>
            <Link to="/app/dashboard">
              <input
                type="button"
                className="back-button"
                defaultValue="BACK"
              />
            </Link>
          </div>
        )
      case '/app/role':
        return (
          <div>
            <div>
              <Link to="/app/expertise">
                <input
                  type="button"
                  className="next-button"
                  defaultValue="NEXT"
                />
              </Link>
            </div>
            <div>
              <Link to="/app/skills">
                <input
                  type="button"
                  className="back-button"
                  defaultValue="BACK"
                />
              </Link>
            </div>
          </div>
        )
    }
  }
  render() {
    return <div>{this.renderPath()}</div>
  }
}
export default NavigationButtons

// <input
//                 type="button"
//                 className="back-button"
//                 defaultValue="BACK"
//               />

// <div>
//           <WhatsYourName />
//         </div>
