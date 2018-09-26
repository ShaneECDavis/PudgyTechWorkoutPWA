import React, { Component } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { connect } from 'react-redux'

// make class component and map state to props

class Footer extends Component {
  componentDidMount() {}

  render() {
    return (
      <Paper>
        <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All"/>
          {this.props.muscles &&
            this.props.muscles.map(item => <Tab key={item} label={item} />)}
        </Tabs>
      </Paper>
    )
  }
}

const mapState = state => {
  return {
    muscles: state.muscles
  }
}

export default connect(mapState)(Footer)
