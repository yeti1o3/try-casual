import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import { BiShoppingBag } from 'react-icons/bi'
function Navbar({basketCount}) {
  
  return (
    <div className='navbar'>
      <div className="navbar__Content">
      
      <Link to={'/'} className='mainlogo__Link'>
        <div className='navbar__Mainlogo'><h1>SHOP</h1></div> 
      </Link>
      <div className='navbar__Links'>
        <div>About Us</div>
        <div>Contact</div>
        <Link to={'/checkout'} className='addtocart__Link' ><div className='navbar__Addtocart'><BiShoppingBag/><span>{basketCount}</span></div></Link>
        
      </div>
      </div>
    </div>
       
      
  )
}

export default Navbar;