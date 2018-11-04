import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/lab/Slider'
import NavigationButtons from '../../components/NavigationButtons/index'

const styles = {
  root: {
    width: 600,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  slider: {
    maxWidth: 600,
  },
}

class Expertise extends React.Component {
  state = {
    value: 50,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div>
        <div className={classes.root}>
          <Typography id="label">
            <h1 className="title">What's your level of expertise?</h1>
          </Typography>
          <div>{value}%</div>
          <br />
          <Slider
            className={classes.slider}
            value={value}
            aria-labelledby="label"
            min={0}
            max={100}
            step={5}
            onChange={this.handleChange}
          />
        </div>
        <NavigationButtons />
      </div>
    )
  }
}

Expertise.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Expertise)
