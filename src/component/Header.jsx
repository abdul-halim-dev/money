import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=" z-50 bg-active sticky top-0 py-4 px-8 w-full h-[55px] flex items-center justify-between text-secondary ">
    
      <Link to={"/"}>
          <img className=" w-[30px] h-[30px] object-cover" src="./src/assets/icon/logo.png " alt="" />
        </Link>

      <Link to={"/dashbord"}>
          <img className=" w-[30px] h-[30px] object-cover" src="./src/assets/icon/dummy-profile.png " alt="" />
        </Link>


      </header>

  )
}

export default Header