import { FETCH_TOKEN, SET_TOKEN } from '../types'

export const fetchToken = ({ data, router, to }) => ({
  type: FETCH_TOKEN,
  payload: data,
  meta: {
    router, to
  }
})

export const setToken = ({ payload }) => ({
  type: SET_TOKEN,
  payload

})
