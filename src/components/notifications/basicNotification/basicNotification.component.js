import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({

  items: {
    marginBottom: theme.spacing(0.5),
    position: 'static'
  }
}))

const BasicNotification = ({ notification }) => {
  const css = useStyles()

  return (
    <Snackbar
      className={css.items}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={true}
      //   onClose={handleClose}
      TransitionComponent={Fade}
      key={notification.id}
    >
      <Alert severity={notification.severity}>
        {notification.message}
      </Alert>
    </Snackbar>
  )
}

BasicNotification.propTypes = {
  notification: PropTypes.shape({
    message: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    severity: PropTypes.string.isRequired
  }).isRequired
}

export default BasicNotification
