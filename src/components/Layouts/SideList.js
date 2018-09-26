import React from 'react'
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText
} from '@material-ui/core'
import { InboxIcon } from '@material-ui/icons/Inbox'
import { Link } from 'react-router-dom'

const SideList = props => (
  <Paper style={{ width: 250 }}>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>     
    </List>
  </Paper>
)

export default SideList
