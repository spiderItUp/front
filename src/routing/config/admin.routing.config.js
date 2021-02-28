import ScrapperView from 'views/scrapper/scrapper.view'

import { scrapper } from 'constants/paths.constant'

const adminRoutes = [
  {
    path: scrapper,
    component: ScrapperView,
    exact: true,
    guarded: true,
    redirect: false
  }

]

export default adminRoutes
