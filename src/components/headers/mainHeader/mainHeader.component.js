import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import Gutter from 'components/gutters/gutter/gutter.component'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  notificationButton: {
    marginRight: theme.spacing(4)
  }

}))

const MainHeader = () => {
  const css = useStyles()
  return (
    // variant on AppBar is passed down to paper
    <AppBar elevation={0} position="absolute">
      <Gutter px={2} background="default">
        <Toolbar disableGutters>
          <Typography variant="h4" className={css.title}>
            Scrape it all!
          </Typography>
          <Button
            color="primary"
            // className={css.button}
            startIcon={<ExitToAppIcon />}
          >
        Logout
          </Button>
        </Toolbar>
      </Gutter>
    </AppBar>

  )
}

export default MainHeader
