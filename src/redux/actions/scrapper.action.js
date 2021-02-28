import { FETCH_URL_STATUS, SET_URL_STATUS, FETCH_ALL_URL, SET_ALL_URL } from '../types'

export const fetchUrlStatus = ({ payload }) => ({
  type: FETCH_URL_STATUS,
  payload

})

export const setUrlStatus = ({ payload }) => ({
  type: SET_URL_STATUS,
  payload
})

export const fetchAllUrl = () => ({
  type: FETCH_ALL_URL
})

export const setAllUrl = ({ payload }) => ({
  type: SET_ALL_URL,
  payload
})
