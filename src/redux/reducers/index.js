import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { uiReducer } from './ui.reducer'
import { notificationReducer } from './notification.reducer'
import { scrapperReducer } from './scrapper.reducer'

export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notification: notificationReducer,
  scrapper: scrapperReducer

})
