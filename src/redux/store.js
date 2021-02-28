import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import apiMiddl from './middlewares/core/api.middl'
import splitterMiddl from './middlewares/core/splitter.middl'
import uiMiddl from './middlewares/core/ui.middl'
import notificationMiddl from './middlewares/core/notification.middl'
import authMiddl from './middlewares/feature/auth.middl'
import scrapperMiddl from './middlewares/feature/scrapper.middl'

// order of middl matters!
const coreMiddl = [
  splitterMiddl, // always first
  apiMiddl,
  uiMiddl,
  notificationMiddl // always last
]

const featureMiddl = [
  authMiddl,
  scrapperMiddl
]

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const serializeState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch (e) {
    console.log(e)
  }
}

const deserializeState = () => {
  try {
    const state = JSON.parse(localStorage.getItem('state'))
    return (state === null) ? undefined : state
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const store = createStore(
  rootReducer,
  deserializeState(),
  composeEnhancers(
    applyMiddleware(...featureMiddl, ...coreMiddl)
  )
)

store.subscribe(() => serializeState(store.getState()))

export default store
