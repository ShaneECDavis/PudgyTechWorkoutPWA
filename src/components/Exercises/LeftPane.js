import React, { Fragment } from 'react'
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import { connect } from 'react-redux'

const LeftPane = props => {
  const selected = Object.entries(
    props.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise
      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise]
      return exercises
    }, {})
  )

  return (
    <Paper style={props.styles.Paper}>
      {selected.map(([group, exercises]) => (
        <Fragment>
          <Typography
            style={{ textTransform: 'capitalize' }}
            variant="headline"
          >
            {group}
          </Typography>
          <List component="ul">
            {exercises.map(({title}) => (
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        </Fragment>
      ))}
    </Paper>
  )
}

const mapState = state => {
  return {
    exercises: state.exercises
  }
}

export default connect(mapState)(LeftPane)
