/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from 'react'

import Typography from '@material-ui/core/Typography'

/**
 * First item in the array, stands for the first column, and so on
 */

export const scrapperTable = [
  {
    header: 'url',
    dbKey: 'url',
    component: ({ dbKey }) => <Typography>{dbKey}</Typography>
  },
  {
    header: 'status',
    dbKey: 'status',
    component: ({ dbKey }) => <Typography>{dbKey}</Typography>
  }

]
