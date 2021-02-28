import fetch from 'unfetch'
import store from 'redux/store'
import { getTokenAuthSelector } from 'redux/selectors/auth.selector'

const ScrapperService = () => {
  const { REACT_APP_SCRAPPER_SERVICE_URL } = process.env

  const fetchUrlStatus = async ({ data }) => fetch(`${REACT_APP_SCRAPPER_SERVICE_URL}scrape`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getTokenAuthSelector(store.getState())}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const fetchAllUrl = async () => fetch(`${REACT_APP_SCRAPPER_SERVICE_URL}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getTokenAuthSelector(store.getState())}`,
      'Content-Type': 'application/json'
    }
  })

  return {
    fetchUrlStatus,
    fetchAllUrl
  }
}

export default ScrapperService()
