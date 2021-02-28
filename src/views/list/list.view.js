/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@material-ui/core/styles'

import MainLayout from 'layouts/main/main.layout'

import _Loader from 'content/scrapper/_loader.content'

import Notifications from 'components/notifications/parentNotification/parentNotification.component'
import Gutter from 'components/gutters/gutter/gutter.component'

import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { fetchAllUrl } from 'redux/actions/scrapper.action'
import { getAllScrapperSelector } from 'redux/selectors/scrapper.selector'

const _section = ({ baseUrl, urls }) => {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => setOpen(!open)
  return (
    <>
      <>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={baseUrl} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {
            urls.map(el => (
              <List component="div" disablePadding key={el}>
                <ListItem>
                  <ListItemText primary={el} />
                </ListItem>
              </List>
            ))

          }
        </Collapse>
      </>
    </>
  )
}

const ScrapperView = () => {
  const theme = useTheme()
  const dispatch = useDispatch()

  const urls = useSelector(getAllScrapperSelector)

  useEffect(() => {
    dispatch(fetchAllUrl())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      <Notifications></Notifications>
      <_Loader></_Loader>
      <Gutter px={6} background="grey1" styles={{
        paddingTop: theme.spacing(4)
      }}>

        <List
          style={{ wordWrap: 'anywhere' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
         ulrs by domains previously looked up
            </ListSubheader>
          }
        >
          {
            urls.map(el => (
              <_section key={el.baseUrl} baseUrl={el.baseUrl} urls={el.urls}></_section>
            //   _section(el)
            ))
          }
        </List>

      </Gutter>
    </MainLayout>
  )
}

export default ScrapperView
