import React from 'react'
import './product.css'
import { Link } from 'react-router-dom';


function Product({thumbnail,title,catagory,id,price}) {
  return (
    <div className='product'>
      <Link to={"detail/"+id}>
        <div className="thumbnail">
            <img src={thumbnail} alt=''/>
        </div>
        </Link>
        <div className="catagery">{catagory}</div>
        <div className="title"><p>{title}</p></div>
      
        
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <div className="price"><strong>${price}</strong></div>
        
    </div>
  )
}

export default Product