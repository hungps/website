import * as React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from './Home/Loadable'
import { RoutePaths } from './routes'
import { GlobalStyle } from './styles'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.home} element={<HomePage />} />

        <Route path="*" element={<Navigate replace to={RoutePaths.home} />} />
      </Routes>
      <GlobalStyle />
    </Router>
  )
}
