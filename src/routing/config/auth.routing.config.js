import LoginView from 'views/Login/login.view'

import { login } from 'constants/paths.constant'

const authRoutes = [
  {
    path: login,
    component: LoginView,
    exact: true,
    guarded: false,
    redirect: false
  }
]

export default authRoutes
