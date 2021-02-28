/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const BasicTable = ({ data, accessors }) => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table /* className={classes.table} */ aria-label="engagement table">
        <TableHead>
          <TableRow key="hey">
            {
              accessors.map(el => {
                return <TableCell
                  key={el.header}
                  align="left"
                >
                  <Typography>{el.header}</Typography>
                </TableCell>
              })
            }
          </TableRow>
        </TableHead>
        <TableBody style={{ wordWrap: 'anywhere' }}>
          {
            data.map(row =>
              <TableRow key={row.id} hover >
                {
                  accessors.map((el, i) => {
                    const Component = el.component
                    const dbKeys = Object.keys(el)
                      .filter(_el => _el.includes('db'))
                      .reduce((acc, current) => {
                        acc[current] = row[el[current]]
                        return acc
                      }, {})

                    return <TableCell
                      key={i}
                      align="left"
                    >
                      {
                        Component(dbKeys)
                      }

                    </TableCell>
                  })
                }
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

BasicTable.propTypes = {
  data: PropTypes.array.isRequired,
  accessors: PropTypes.array.isRequired
}

export default BasicTable
