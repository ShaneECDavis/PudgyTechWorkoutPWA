import React, { Component } from 'react'
import { Paper, Typography, Button } from '@material-ui/core'
import { initializeMeda } from '../Camera/Feed'
import Webcam from 'react-webcam'
// make a class component.

class Camera extends Component {
  setRef = webcam => {
    this.webcam = webcam
  }
  capture = () => {
    const imageSrc = this.webcam.getScreenshot()
    console.log(imageSrc)
  }
  render() {
    return (
      <Paper>
        <Typography style={{ marginTop: 20 }} variant="subheading">
          {' '}
          Camera
        </Typography>
        <div>
          <Webcam ref={this.setRef} screenshotFormat="image/jpeg" />

          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={this.capture}
            align="center"
          >
            Take Pic
          </Button>
        </div>
      </Paper>
    )
  }
}

export default Camera
