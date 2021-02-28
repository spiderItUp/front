import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import IndexRoutingRoute from 'routing/routes/index.routing.route'

function App () {
  return (
    <Router>
      <IndexRoutingRoute></IndexRoutingRoute>
    </Router>
  )
}

export default App
