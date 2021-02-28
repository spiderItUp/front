import { FETCH_URL_STATUS, FETCH_URL_STATUS_SUCCESS, FETCH_URL_STATUS_ERROR, FETCH_ALL_URL, FETCH_ALL_URL_SUCCESS } from 'redux/types'
import { apiRequest } from 'redux/actions/api.action'
import { setUrlStatus, setAllUrl } from 'redux/actions/scrapper.action'
import { showSpinner, hideSpinner } from 'redux/actions/ui.action'
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

  case FETCH_ALL_URL:
    next([
      showSpinner(),
      apiRequest({
        fn: ScrapperService.fetchAllUrl,
        onSuccess: FETCH_ALL_URL_SUCCESS,
        onError: FETCH_URL_STATUS_ERROR
      })
    ])
    break

  case FETCH_URL_STATUS_SUCCESS:
    next([
      setUrlStatus({ payload: action.payload.data }),
      hideSpinner(),
      pushNotification({ message: 'success', severity: severity.success })
    ])
    break

  case FETCH_ALL_URL_SUCCESS:
    next([
      setAllUrl({ payload: action.payload.data }),
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
