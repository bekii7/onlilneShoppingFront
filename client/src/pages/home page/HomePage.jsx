import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Header from './Header';
import Products from './products';
import { TiShoppingCart } from 'react-icons/ti';

//line 34 fixed yarekuat cartuan kaltemecheh lela bota cart siralet
//ena new item add sidereg kechild element call back fun new yeserawt
const HomePage = () => {
  const [items,setItems] = useState('')
  const [cartItems,setCartItems] = useState(0)
  
  const addToCart =(id)=>{
    setCartItems(prev=>prev +=1)
    fetch('http://localhost:3000/newItem',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  id,user:"bek" })
    })
  }
  useEffect(()=>{
    const fetchApi = async ()=>{
      try {
        const result = await fetch('http://localhost:8000/products?limit=20')
        const data = await result.json()
        const dataItems = data.slice(0,10)
        setItems(dataItems)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  },[])
  return(
    <div >
    <Link className=' fixed justify-end ml-6 mt-28' to='/checkOut'>
    <p className='text-[8px] text-white ml-auto bg-red-700 w-fit p-1 rounded-[50%]'>{cartItems}</p>
    <TiShoppingCart size={30} className='cursor-pointer z-10'/>
  </Link>
    <Header addToCart={addToCart}/>
    {items !=null? <Products items={items} addToCart={addToCart}/>:null}
    </div>
  )
}

export default HomePage