import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as paths from 'constants/paths.constant'

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      width: 210
    }
  },

  drawer: {
    flexShrink: 0
  },

  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  logo: {
    display: 'block',
    height: 'auto',
    width: '30%',
    margin: 'auto'
  },
  nested: {

  }

}))

const List1 = () => {
  const css = useStyles()
  const [open, setopen] = useState(true)
  const handleSubmenu = () => setopen(!open)

  return (
    <>
      <List>
        <ListItem button onClick={handleSubmenu}>
          <ListItemText primary="SCRAPPER" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={css.nested} to={paths.scrapper} component={Link}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="scrapper" />
          </ListItem>
          <ListItem button className={css.nested} to={paths.list} component={Link}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}

const List2 = () => {
  const css = useStyles()
  const [open, setopen] = useState(true)
  const handleSubmenu = () => setopen(!open)

  return (
    <>
      <List>
        <ListItem button onClick={handleSubmenu}>
          <ListItemText primary="SETTINGS" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={css.nested}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="setting1" />
          </ListItem>
          <ListItem button className={css.nested} >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="setting2" />
          </ListItem>
          <ListItem button className={css.nested}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="setting3" />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}

const MainDrawer = () => {
  const css = useStyles()

  return (
    <Drawer
      className={css.root }
      variant="permanent"
      open
      classes={{
        paper: css.root
      }}
    >
      <Toolbar>
        <img className={css.logo} src="/img/sun.png" alt="logo"/>
      </Toolbar>
      <Divider styles={{ height: '0.14rem' }}></Divider>
      <div className={css.drawerContainer}>
        <List1></List1>
        <Divider />
        <List2></List2>
        <Divider />
      </div>
    </Drawer>

  )
}

export default MainDrawer
