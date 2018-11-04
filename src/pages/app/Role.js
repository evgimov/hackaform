import React from 'react'
import NavigationButtons from '../../components/NavigationButtons/index'
import SignupHeader from '../../components/SignupHeader'
import '../../components/NavigationButtons/styles.css'

class Role extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRole: '',
    }

    this.handleSelected = event => {
      const selectedRole = event.target.id
      this.setState(() => ({ selectedRole }))

      console.log(this.state.selectedRole)
    }
  }

  render() {
    const roleNames = [
      'Front-end',
      'Back-end',
      'Project manager',
      'Designer',
      'Presentation',
      'All around',
    ]
    return (
      <div>
        <SignupHeader />
        <div className="wrapper">
          <h1 className="title">What's your preferred Role?</h1>
          <div className="skillItemsWrapper">
            {roleNames.map(roleName => (
              <div key={roleName}>
                <button
                  className={
                    this.state.selectedRole === roleName
                      ? 'btn-active btn'
                      : 'btn'
                  }
                  id={roleName}
                  onClick={this.handleSelected}
                >
                  {roleName}
                </button>
              </div>
            ))}
          </div>
          <NavigationButtons />
        </div>
      </div>
    )
  }
}

export default Role
