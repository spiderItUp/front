import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import MuiTextField from '@material-ui/core/TextField'

// eslint-disable-next-line react/display-name
const TextField = forwardRef((props, ref) => {
  return (
    <MuiTextField fullWidth {...props} inputRef={ref} />
  )
})

// const TextField = props => {
//   return <MuiTextField {...props}/>
// }

TextField.propTypes = {

}

export default TextField
