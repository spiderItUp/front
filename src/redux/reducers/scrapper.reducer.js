import { SET_URL_STATUS } from '../types'

const initState = {
  urls: []
}

export function scrapperReducer (state = initState, action) {
  switch (action.type) {
  case SET_URL_STATUS:
    return { ...state, urls: action.payload }

  default:
    return state
  }
}
