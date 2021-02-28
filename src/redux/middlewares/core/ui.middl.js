import { REDIRECT } from '../../types'

const uiMiddl = () => (next) => (action) => {
  switch (action.type) {
  case REDIRECT:
    action.meta.router.push(action.meta.to)

    break
  default:
    next(action)
  }
}

export default uiMiddl
