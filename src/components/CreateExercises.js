import React, { Component } from 'react'
import {
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles,
  InputLabel,
  Select,
  MenuItem,
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Delete } from '@material-ui/icons'
import { addWorkout, removeWorkout } from '../store'
import { connect } from 'react-redux'

class CreateWorkout extends Component {
  state = {
    title: '',
    muscleGroup: '',
    description: ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleDelete = id => {
    this.props.removeWorkout(id)
  }

  handleCreate = e => {
    console.log(e.target, 'what is happening on this thing now!!!!!')
    e.preventDefault()
    if (this.state.title) {
      this.props.addWorkout({
        title: this.state.title,
        id: Date.now(),
        description: this.state.description,
        muscleGroup: this.state.muscleGroup
      })
      this.setState({
        title: '',
        description: '',
        muscleGroup: ''
      })
    }
  }

  render() {
    const { title, muscleGroup, description } = this.state
    return (
      <Paper>
        <Typography variant="display1" align="center" gutterBottom>
          Exercises
        </Typography>
        <form onSubmit={this.handleCreate}>
          <TextField
            name="title"
            label="Exercise"
            value={title}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />

          <Select
            name="muscleGroup"
            variant="outlined"
            value={muscleGroup}
            onChange={this.handleChange}
            inputProps={{ name: 'muscleGroup' }}
          >
            {this.props.muscles.map(item => (
              <MenuItem name="muscleGroup" value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <TextField
            name="description"
            label="Description"
            value={description}
            multiline
            rows="4"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Excersise List</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              {this.props.exercises && (
                <div>
                  {this.props.exercises.map(({ id, title, muscles }) => (
                    <ListItem  key={id}>
                      <ListItemSecondaryAction>
                        <IconButton
                          color="primary"
                          onClick={() => this.handleDelete(id)}
                        >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                      <ListItemText primary={title} secondary={muscles} />
                    </ListItem>
                  ))}{' '}
                </div>
              )}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    )
  }
}

const mapState = state => {
  return {
    exercises: state.exercises,
    muscles: state.muscles
  }
}

const mapDispatch = dispatch => ({
  addWorkout: workout => {
    dispatch(addWorkout(workout))
  },
  removeWorkout: id => {
    dispatch(removeWorkout(id))
  }
})

export default connect(
  mapState,
  mapDispatch
)(CreateWorkout)
