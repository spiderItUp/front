import { FETCH_URL_STATUS, SET_URL_STATUS } from '../types'

export const fetchUrlStatus = ({ payload }) => ({
  type: FETCH_URL_STATUS,
  payload

})

export const setUrlStatus = ({ payload }) => ({
  type: SET_URL_STATUS,
  payload
})
