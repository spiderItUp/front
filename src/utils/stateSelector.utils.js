import store from 'redux/store'

const stateSelector = (selector) => selector(store.getState())

export default stateSelector
