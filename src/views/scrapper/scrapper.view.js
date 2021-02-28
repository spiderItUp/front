import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useTheme } from '@material-ui/core/styles'

import MainLayout from 'layouts/main/main.layout'

import _Loader from 'content/scrapper/_loader.content'

import { useForm } from 'react-hook-form'

import TextField from 'components/inputs/textfields/textfield.component'
import FormWrapper from 'components/forms/formWrapper/formWrapper.component'
import Notifications from 'components/notifications/parentNotification/parentNotification.component'
import Gutter from 'components/gutters/gutter/gutter.component'
import BasicTable from 'components/tables/basicTable/basicTable.component'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { fetchUrlStatus } from 'redux/actions/scrapper.action'
import { getUrlsScrapperSelector } from 'redux/selectors/scrapper.selector'

import { scrapperTable } from 'constants/tableAccessors/scrapper.constant'

const _BasicTable = () => {
  const urls = useSelector(getUrlsScrapperSelector)

  return (
    <BasicTable data={urls} accessors={scrapperTable}></BasicTable>

  )
}

const ScrapperView = () => {
  const theme = useTheme()
  const dispatch = useDispatch()

  const applyFilters = (data) => {
    dispatch(fetchUrlStatus({ payload: data }))
  }

  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  })

  return (
    <MainLayout>
      <Notifications></Notifications>
      <_Loader></_Loader>
      <FormWrapper onSubmit={handleSubmit(applyFilters)}>
        <Gutter px={6} background="grey1" styles={{
          paddingTop: theme.spacing(4)
        }}>
          <Grid container wrap='nowrap' alignItems='center' spacing={2}>
            <Grid item xs={8}>
              <TextField
                type="text"
                name="url"
                label="url"
                variant="outlined"
                ref={register}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                type="text"
                name="deep"
                label="deep"
                variant="outlined"
                ref={register}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Button type="submit">Submit</Button>

            </Grid>

          </Grid>

          {/* table */}
          <_BasicTable></_BasicTable>
        </Gutter>
      </FormWrapper >

    </MainLayout>
  )
}

export default ScrapperView
