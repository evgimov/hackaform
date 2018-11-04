import React, { Component } from 'react'
import { Link } from 'gatsby'
import './styles.css'
import WhatsYourName from './../WhatsYourName'

const globalLocation = typeof window !== 'undefined' && window.location

class NavigationButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderPath() {
    switch (globalLocation.pathname) {
      case '/app/':
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
            <Link to="/app">
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
      case '/app/expertise':
        return (
          <div>
            <div>
              <Link to="/app/results">
                <input
                  type="button"
                  className="next-button"
                  defaultValue="NEXT"
                />
              </Link>
            </div>
            <div>
              <Link to="/app/role">
                <input
                  type="button"
                  className="back-button"
                  defaultValue="BACK"
                />
              </Link>
            </div>
          </div>
        )
      case '/app/result':
        return (
          <div>
            <div>
              <Link to="/app/expertise">
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
