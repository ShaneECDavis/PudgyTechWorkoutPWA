import React, { Component } from 'react'
import { Typography, Paper } from '@material-ui/core'

class Welcome extends Component {
  render() {
    return (
      <Paper style={{ width: '100vw', height: '100vw' }}>
        <Typography variant="display2" align="center">
          {' '}
          Welcome{' '}
        </Typography>
      </Paper>
    )
  }
}

export default Welcome
