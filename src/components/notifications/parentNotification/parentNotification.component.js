import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { getNotificationsSelector } from 'redux/selectors/notification.selector'

import BasicNotification from 'components/notifications/basicNotification/basicNotification.component'

const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: theme.zIndex.snackbar,
    position: 'fixed',
    right: '1rem',
    top: '1rem'
  }
}))

const Notifications = ({ notificationType }) => {
  const css = useStyles()

  const notifications = useSelector(getNotificationsSelector) || []

  return (
    <div id="#notification" className={css.container}>
      {
        notifications.map(el => <BasicNotification key={el.id} notification={el}></BasicNotification>)
      }
    </div>
  )
}

Notifications.propTypes = {
  notificationType: PropTypes.oneOf(['basic'])
}

export default Notifications
