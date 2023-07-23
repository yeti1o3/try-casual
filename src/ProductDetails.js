import React ,{ useEffect, useState }from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageNotFound from './PageNotFound'
import Loading from './Loading'


function ProductDetails({ onAddToCart }) {
   const[product,updataproduct]=useState({});
   const[loading,updateLoading]=useState(true);
   const[itemCount,updateItemCount]=useState(1);

  
   const {id}=useParams();
   useEffect(function(){
   axios.get('https://dummyjson.com/products/'+id).then(function(responce){
    updataproduct(responce.data);
    updateLoading(false);
   }).catch(function(error){
    updateLoading(false)
   });
  })
  function OnChange(event){
    let count=+event.target.value;
    updateItemCount(count);
  }
  function OnClick(){
    let id=product.id;
    onAddToCart(itemCount,id);
    updateItemCount(1);
  }
  if(loading)
  {
    return(<Loading/>);
  }
  if(!product)
  {
    return(<PageNotFound></PageNotFound>)
  }
  return (
   <div className='ProductDetails'>
        <div className="ProductDetails_thumbnail"> 
        <img src={product.thumbnail} alt=""/>
        </div>
        <div className="ProductDetails_description">
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <div className='short_description'>
                <p>{product.description}</p>
            </div>
            <input value={itemCount}  onChange={OnChange} />
            <button onClick={OnClick}>Add To Cart</button>
            <hr></hr>
            <button>COMPARE</button>
        </div>
    </div>
  )
}

export default ProductDetails