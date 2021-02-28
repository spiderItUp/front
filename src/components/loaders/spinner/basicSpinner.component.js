import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

const css = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  background: '#ccc',
  zIndex: 'tooltip'
}

const Spinner = props => {
  return (
    <Box {...css}>
      <CircularProgress color="primary" size="3.5rem"></CircularProgress>
    </Box>
  )
}

Spinner.propTypes = {

}

export default Spinner
