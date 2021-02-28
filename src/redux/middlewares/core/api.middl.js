import { API_REQUEST } from 'redux/types'

const apiMiddl = ({ dispatch }) => (next) => async (action) => {
  next(action)

  if (action.type === API_REQUEST) {
    const { onSuccess, onError, fn, to, router, params, urlParams, reducerAction } = action.meta
    fn({ data: action.payload, params, urlParams })
      .then((res) => {
        if (res.ok) return res.json()
        throw Error(res.statusText)
      })
      .then((data) => dispatch({ type: onSuccess, payload: data, meta: { router, to, params, urlParams, reducerAction } }))
      .catch((error) => dispatch({ type: onError, payload: error, meta: { router, to, params, urlParams, reducerAction } }))
  }
}

export default apiMiddl
