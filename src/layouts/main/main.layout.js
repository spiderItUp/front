import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'

import MainHeader from 'components/headers/mainHeader/mainHeader.component'
import MainDrawer from 'components/drawers/mainDrawer/mainDrawer.component'
import Divider from '@material-ui/core/Divider'

import { array, object } from 'yup/lib/locale'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  drawerContainer: {
    [theme.breakpoints.up('md')]: {
      width: 210,
      background: theme.palette.primary
    }
  },
  leftSidebar: {
    position: 'relative'
  }

}))

const MainLayout = ({ children: Content }) => {
  const css = useStyles()
  return (
    <Grid container id="#layout" className={css.root} wrap="nowrap">
      <Grid item className={css.drawerContainer}>
        <MainDrawer></MainDrawer>
      </Grid>
      <Grid item container direction="column" wrap="nowrap" className={css.leftSidebar}>
        <Toolbar></Toolbar>
        <MainHeader></MainHeader>
        <Divider styles={{ height: '0.14rem' }}></Divider>
        <Grid item xs>
          {Content}
        </Grid>
      </Grid>
    </Grid>
  )
}

MainLayout.propTypes = {
  // children: PropTypes.object.isRequired
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default MainLayout
