import { SET_TOKEN } from '../types'

const initState = {
  access_token: ''
}

export function authReducer (state = initState, action) {
  switch (action.type) {
  case SET_TOKEN:
    return { ...state, access_token: action.payload }

  default:
    return state
  }
}
