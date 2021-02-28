import { SHOW_SPINNER, HIDE_SPINNER, REDIRECT, SHOW_MODAL, HIDE_MODAL } from '../types'

// SPINNER
export const showSpinner = () => ({
  type: SHOW_SPINNER
})

export const hideSpinner = () => ({
  type: HIDE_SPINNER
})

// REDIRECT
export const redirect = ({ to, router }) => ({
  type: REDIRECT,
  meta: {
    to, router
  }
})
