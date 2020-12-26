import React from 'react'
import Footer from '../Footer/Footer'
import Navi from '../Navbar/Navi'

const Layout = ({children}) => {
  return (
    <>
      <Navi/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout;