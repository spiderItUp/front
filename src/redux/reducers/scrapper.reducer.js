import { SET_URL_STATUS, SET_ALL_URL } from '../types'

const initState = {
  urls: [],
  all: []
}

export function scrapperReducer (state = initState, action) {
  switch (action.type) {
  case SET_URL_STATUS:
    return { ...state, urls: action.payload }
  case SET_ALL_URL:
    return { ...state, all: action.payload }

  default:
    return state
  }
}
