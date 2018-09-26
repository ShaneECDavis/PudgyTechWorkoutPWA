import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'


const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10, height:500, overflowY: 'auto' }
}

export default props => (
  <Grid container>
    <Grid item sm>
     <LeftPane styles={styles}/>
    </Grid>

  </Grid>
)
