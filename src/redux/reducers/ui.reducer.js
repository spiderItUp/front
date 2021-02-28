import { SHOW_SPINNER, HIDE_SPINNER } from '../types'

const initState = {
  loading: false
}

export function uiReducer (state = initState, action) {
  switch (action.type) {
  // SPINER
  case SHOW_SPINNER:
    return { ...state, loading: true }

  case HIDE_SPINNER:
    return { ...state, loading: false }

  default:
    return state
  }
}
