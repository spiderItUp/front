import { PUSH_NOTIFICATION } from 'redux/types'

import { pushNotification, removeNotification } from 'redux/actions/notification.action'

import { timeout } from 'constants/notifications.constant'

const notificationMiddl = () => (next) => (action) => {
  switch (action.type) {
  case PUSH_NOTIFICATION:
    // eslint-disable-next-line no-case-declarations
    const id = Date.now().toString()

    next(pushNotification({
      message: action.payload.message,
      severity: action.payload.severity,
      id
    }))

    // dispatch a clear action after a given time
    setTimeout(() => {
      next(removeNotification({ id }))
    }, timeout[action.payload.severity])

    break
  default:
    next(action)
  }
}

export default notificationMiddl
