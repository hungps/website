import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage } from './Home/Loadable'
import { RoutePaths } from './routes'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.home} element={<HomePage />} />
      </Routes>
    </Router>
  )
}
