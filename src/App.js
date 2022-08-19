import React,{Suspense} from "react";
import { Helmet } from "react-helmet";
// Screens

import { HashRouter, Route, Routes } from 'react-router-dom'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

export default function App() {
  return (
    <>
       <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

