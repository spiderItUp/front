import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import clsx from 'utils/clsx.utils'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  }

}))

const PlainLayout = ({ children: Content, centered }) => {
  const css = useStyles()
  const cssArr = [css.root]
  if (centered) cssArr.push('deplace-flexCentered')
  return (
    <Grid container id="layout" className={clsx(cssArr)} wrap="nowrap">
      {Content}
    </Grid>
  )
}

PlainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  centered: PropTypes.bool
}

export default PlainLayout
