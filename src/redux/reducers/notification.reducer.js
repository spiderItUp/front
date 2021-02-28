import { PUSH_NOTIFICATION, REMOVE_NOTIFICATION } from '../types'

const initState = {
  data: []
}

export function notificationReducer (state = initState, action) {
  switch (action.type) {
  case PUSH_NOTIFICATION:
    return {
      ...state,
      data: [...state.data, action.payload]
    }

  case REMOVE_NOTIFICATION:
    return {
      ...state,
      data: state.data.filter(el => el.id !== action.payload)
    }

  default:
    return state
  }
}
