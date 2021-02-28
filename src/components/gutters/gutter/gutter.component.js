import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'

import { useTheme } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: '1000px',
//     margin: 'auto'
//     [theme.breakpoints.up('sm')]: {
//       width: '99%'
//     },
//     [theme.breakpoints.up('md')]: {
//       width: '99%'
//     }
//   }

// }))

const Gutter = ({ children, styles, ...props }) => {
  // const css = useStyles()
  const theme = useTheme()
  const defaultStyles = {
    paddingLeft: props?.px ? theme.spacing(props.px) : theme.spacing(2),
    paddingRight: props?.px ? theme.spacing(props.px) : theme.spacing(2),
    backgroundColor: props?.background ? theme.palette.background[props.background] : 'transparent'
  }

  return (
    <Paper id="#gutter" elevation={0} style={{ ...defaultStyles, ...styles }} {...props}>
      {children}
    </Paper>
  )
}

Gutter.propTypes = {
  children: PropTypes.any.isRequired,
  styles: PropTypes.object,
  px: PropTypes.number,
  background: PropTypes.oneOf(['paper', 'default', 'grey1'])

}

export default Gutter
