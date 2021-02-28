import { API_REQUEST } from '../types'

export const apiRequest = ({
  fn, body, params, urlParams, onSuccess, onError, to, router, reducerAction
}) => ({
  type: API_REQUEST,
  payload: body,
  meta: { fn, onSuccess, onError, to, router, params, urlParams, reducerAction }
})
