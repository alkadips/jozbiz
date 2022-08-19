import React from 'react'
 const Home = React.lazy(() => import('./components/Sections/Home'))
const routes = [
  { path: '/', name: 'Home', element: Home },
]
export default routes
