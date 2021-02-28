import ScrapperView from 'views/scrapper/scrapper.view'
import ListView from 'views/list/list.view'

import { scrapper, list } from 'constants/paths.constant'

const adminRoutes = [
  {
    path: scrapper,
    component: ScrapperView,
    exact: true,
    guarded: true,
    redirect: false
  },
  {
    path: list,
    component: ListView,
    exact: true,
    guarded: true,
    redirect: false
  }

]

export default adminRoutes
