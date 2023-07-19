import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { BiShoppingBag } from 'react-icons/bi'
function Navbar({totalCount}) {
  
  return (
    <div className='navbar'>
      <div className="navbar__Content">
      
      <Link to={'/'}>
        <div className='navbar__Mainlogo'><img src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg" alt=''/></div> 
      </Link>
      <div className='navbar__Links'>
        <div>Link1</div>
        <div>Link2</div>
        <Link to='/checkout'><div className='navbar__Addtocart'><span>{totalCount}</span><BiShoppingBag/></div></Link>
      </div>
      </div>
    </div>
       
      
  )
}

export default Navbar;