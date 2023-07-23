import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Content.css';
import Heading from './Heading';
import { CiSearch } from 'react-icons/ci';
import axios from 'axios';
import Loading from './Loading'




function Content() {
  const[query,updateQuery]=useState("");
  const[choice,updateChoice]=useState(1)
  const[allData,updataData]=useState([]);
  const[loading,updateLoading]=useState(true)

  useEffect(function(){
  axios.get('https://dummyjson.com/products').then(function(responce){
    const d= responce.data.products;
    updataData(d);
    updateLoading(false)
   }).catch(function(error){
      updateLoading(false)
   });
  },[])
  
  
  let data=allData;
  data=data.filter(function(item){
    let lowercaseQuery=query.toLowerCase();
   let lowercaseTitle=item.title.toLowerCase();
   return lowercaseTitle.indexOf(lowercaseQuery)!== -1;
  })
  if(choice===2)
  {console.log("its here");
    data.sort(function(x,y)
    {
      return x.title<y.title?-1:1;

    })
  }
  if(choice===3)
  {
    data.sort(function(x,y){
      return x.title<y.title?1:-1;
    })
  }
  if(choice===4)
  {
    data.sort(function(x,y)
   {
    return x.price-y.price;
   })
  }
   
  function sortItems(event){
    const newQuery=event.target.value;
    updateQuery(newQuery);
  }
  function arrangeItems(event){
    const newChoice=+event.target.value;
    updateChoice(newChoice);
  } 
  if(loading){
    return(<><Loading/></>)
  }
  else{
     return (
 <div className='content'>
        
        <div className="main__Content">
       <div className="heading">
        
        <input value={query} onChange={sortItems} />
        <div className='search'><CiSearch/></div>
        
        <select onChange={arrangeItems} value={choice}>
          <option value={1}>Default</option>
          <option value={2}>A-Z</option>
          <option value={3}>Z-A</option>
          <option value={4}>By price</option>
        </select>
        <Heading/>
       </div>
         <div className='sub__Content'>
        {
          data.map(function(item){
           return <Product key={item.id}{...item} />
          })
        }
       </div>
      
       </div>
    </div>)
  
  }
 
  
      }

export default Content