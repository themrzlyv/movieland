import React from 'react'
import Footer from '../Footer/Footer'
import Navi from '../Navbar/Navi'
import ShowRouter from '../ShowRouter/ShowRouter'

const Layout = ({children}) => {
  return (
    <>
      <Navi/>
      <ShowRouter />
      {children}
      <Footer/>
    </>
  )
}

export default Layout;