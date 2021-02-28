import fetch from 'unfetch'
import store from 'redux/store'
import { getTokenAuthSelector } from 'redux/selectors/auth.selector'
import queryString from 'utils/queryString.utils'

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

  // const fetchEngagement = async ({ params }) => {
  //   let url = `${REACT_APP_SCRAPPER_SERVICE_URL}/scrape`

  //   if (params) url = url.concat(queryString({ queryObj: params }))

  //   return fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       Authorization: `Bearer ${getTokenAuthSelector(store.getState())}`,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }

  // const fetchEngagementByUser = async ({ params, urlParams }) => {
  //   let url = `${REACT_APP_BASE_URL}api/captacion-user`

  //   if (urlParams) url = url.concat(`/${urlParams}`)
  //   if (params) url = url.concat(queryString({ queryObj: params }))

  //   return fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       Authorization: `Bearer ${getTokenAuthSelector(store.getState())}`,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }

  // const createEngagement = async ({ data }) => fetch(`${REACT_APP_BASE_URL}api/captacion`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: `Bearer ${getTokenAuthSelector(store.getState())}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })

  // const updateEngagement = async ({ data, urlParams }) => fetch(`${REACT_APP_BASE_URL}api/captacion/${urlParams}`, {
  //   method: 'PUT',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: `Bearer ${getTokenAuthSelector(store.getState())}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })

  // const removeEngagement = async ({ urlParams }) => fetch(`${REACT_APP_BASE_URL}api/captacion/${urlParams}`, {
  //   method: 'DELETE',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: `Bearer ${getTokenAuthSelector(store.getState())}`,
  //     'Content-Type': 'application/json'
  //   }
  // })

  return {
    fetchUrlStatus

  }
}

export default ScrapperService()
