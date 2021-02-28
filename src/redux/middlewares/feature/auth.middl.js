import { FETCH_TOKEN, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_ERROR } from 'redux/types'
import { apiRequest } from 'redux/actions/api.action'
import { redirect } from 'redux/actions/ui.action'
import { setToken } from 'redux/actions/auth.action'

import AuthService from 'services/auth.service'

const authMiddl = () => (next) => (action) => {
  switch (action.type) {
  case FETCH_TOKEN:
    next(
      apiRequest({
        fn: AuthService().fetchToken,
        body: action.payload,
        onSuccess: FETCH_TOKEN_SUCCESS,
        onError: FETCH_TOKEN_ERROR,
        to: action.meta?.to,
        router: action.meta?.router
      })
    )
    break

  case FETCH_TOKEN_SUCCESS:
    next([
      setToken({ payload: action.payload.token }),
      redirect({ to: action.meta.to, router: action.meta.router })
    ])

    break

  case FETCH_TOKEN_ERROR:
    next(action)
    break

  default:
    next(action)
  }
}

export default authMiddl
