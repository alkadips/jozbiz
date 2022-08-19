import React from 'react'
import TopNavbar from '../components/Nav/TopNavbar'
import AppContent from '../components/AppContent'
import AppHeader from '../components/Sections/Home'
import Footer from '../components/Sections/Footer'

const DefaultLayout = () => {
  return (
    <div>
       <TopNavbar /> 
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
