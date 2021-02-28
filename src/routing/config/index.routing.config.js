
import AuthRoutes from './auth.routing.config'
import AdminRoutes from './admin.routing.config'

const indexRoutes = [
  ...AdminRoutes,
  ...AuthRoutes
]

export default indexRoutes
