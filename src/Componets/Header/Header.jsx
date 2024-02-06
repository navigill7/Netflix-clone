import React from 'react'
import logo from "../../logo2.png"
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"
const Header = () => {
  
  return (
    <nav className='Header'>
      <img src={logo} alt='logo'></img>
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recent</Link>
        <Link to="mylist">My List</Link>
      </div>
      <ImSearch/>
     
    </nav>
  )
}

export default Header