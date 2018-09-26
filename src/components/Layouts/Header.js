import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import MenuIcon from '@material-ui/icons/Menu'
import SideList from './SideList'
import CreateExercises from '../CreateExercises'
import { Link } from 'react-router-dom'

const styles = {
  list: {
    width: 250
  }
}

class Header extends React.Component {
  state = {
    open: false,
    anchor: 'left'
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer('left', true)} />
            <Drawer
              open={this.state.left}
              onClose={this.toggleDrawer('left', false)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                <Paper>
                  <List component="nav">
                    <ListItem component={Link} to="/" button>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem component={Link} to="/CreateExercises" button>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Create Exercises" />
                    </ListItem>
                    <ListItem component={Link} to="/Camera" button>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Camera" />
                    </ListItem>
                  </List>
                </Paper>
              </div>
            </Drawer>
          </IconButton>
          <Typography variant="headline" color="inherit">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
