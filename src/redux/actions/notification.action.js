import { PUSH_NOTIFICATION, REMOVE_NOTIFICATION } from '../types'

// NOTIFICATION
export const pushNotification = ({ message, severity, id, normalizeKey }) => ({
  type: PUSH_NOTIFICATION,
  payload: { message, severity, id },
  meta: { normalizeKey }
})

export const removeNotification = ({ id }) => ({
  type: REMOVE_NOTIFICATION,
  payload: id
})
