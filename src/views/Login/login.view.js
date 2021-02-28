import React from 'react'
import PropTypes from 'prop-types'

import PlainLayout from 'layouts/plain/plain.layout'

import LoginContent from 'content/Login/login.content'

const LoginView = props => {
  return (
    <div id="view">
      <PlainLayout centered>
        <LoginContent></LoginContent>
      </PlainLayout>
    </div>
  )
}

LoginView.propTypes = {

}

export default LoginView
