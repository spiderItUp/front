/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'

const defaultFormWrapperStyles = {
  p: 8,
  borderRadius: 10
}

const FormWrapper = forwardRef(({ children, styles, ...props }, ref) => {
  return (
    <Box {...defaultFormWrapperStyles} {...styles} ref={ref}>
      <form noValidate {...props}>
        {children}
      </form>
    </Box>
  )
})

FormWrapper.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default FormWrapper
