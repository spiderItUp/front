import { FETCH_URL_STATUS, FETCH_URL_STATUS_SUCCESS, FETCH_URL_STATUS_ERROR } from 'redux/types'
import { apiRequest } from 'redux/actions/api.action'
import { setUrlStatus } from 'redux/actions/scrapper.action'
import { showSpinner, hideSpinner, hideModal } from 'redux/actions/ui.action'
import { pushNotification } from 'redux/actions/notification.action'

import { severity } from 'constants/notifications.constant'

import ScrapperService from 'services/scrapper.service'

const scrapperMiddl = () => (next) => (action) => {
  switch (action.type) {
  case FETCH_URL_STATUS:
    next([
      showSpinner(),
      apiRequest({
        fn: ScrapperService.fetchUrlStatus,
        body: action.payload,
        onSuccess: FETCH_URL_STATUS_SUCCESS,
        onError: FETCH_URL_STATUS_ERROR
      })
    ])
    break

  case FETCH_URL_STATUS_SUCCESS:
    console.log(action)
    next([
      setUrlStatus({ payload: action.payload.data }),
      hideSpinner(),
      pushNotification({ message: 'success', severity: severity.success })

    ])

    break

  case FETCH_URL_STATUS_ERROR:
    next([
      hideSpinner(),
      pushNotification({ message: 'failed', severity: severity.error })
    ])
    break

  default:
    next(action)
  }
}

export default scrapperMiddl
