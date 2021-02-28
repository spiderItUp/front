import fetch from 'unfetch'
import store from 'redux/store'
import { getTokenAuthSelector } from 'redux/selectors/auth.selector'

const AuthService = () => {
  const { REACT_APP_AUTH_SERVICE_URL } = process.env

  const fetchToken = async ({ data }) => fetch(`${REACT_APP_AUTH_SERVICE_URL}login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const isAuthenticated = () => Boolean(getTokenAuthSelector(store.getState()))

  return {
    fetchToken, isAuthenticated
  }
}

export default AuthService
