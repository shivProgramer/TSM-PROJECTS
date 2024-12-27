import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
const MainLeyout = () => {
  return (
    <div className="flex flex-col min-h-screen  md:m-0">
        {/* navbar on the top */}
        <header>
          <Navbar />
        </header>
        {/* main containt on middle it will take left size of screen  */}
        <div className="flex-1 mt-24">
          <Outlet />
        </div>

        {/* fotter at the end  */}
        {/* <footer>
            <Footer/>
        </footer> */}
      </div>
  )
}

export default MainLeyout