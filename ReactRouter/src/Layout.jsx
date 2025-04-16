import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
        <Outlet/>{/* we can make changes inside header and footer */}
      <Footer />

    </>
  )
}

export default Layout
