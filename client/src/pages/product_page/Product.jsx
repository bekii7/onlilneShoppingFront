import React,{useState,useEffect} from 'react'
import { BsSearch } from 'react-icons/bs'
import { TiLocation } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Products from '../home page/products'
import Nav from '../home page/Nav'
import queryString from 'query-string'
const Product = () => {
  //similar items milew part fetch argeh brand name,product type ena name filter argew ena products component lay ende prop asgebabet
  const {item} = queryString.parse(location.search)
  const [searchValue,setSearchValue] = useState("")
  const [items,setItems] = useState([])
  
  const search = async ()=>{
    window.location.href = `http://localhost:5173/collections?value=${searchValue}`
  }
  const similarItemsFun = (data)=>{
    let selectedItem;
    let similarItems = []
    for (const product of data){
      if(product.id === item){
        selectedItem = product
      }
    }
    //add somemore similar things like name,price range 
    for(const product of data){
      if(product.groupId == selectedItem.groupId ){
        similarItems.push(product)
      }
    }
    setItems(similarItems)
  }
  useEffect(()=>{
    const fetchApi = async ()=>{
      try {
        const result = await fetch('http://localhost:8000/products')
        const data = await result.json()
        similarItemsFun(data)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  },[])
  return (
    <div className='h-screen w-screen bg-[#F5F5DC] pl-12 pt-4'>
        <Nav/>
      <div className='desktop:flex   p-4 justify-between desktop:pr-52'>
      <div className='flex gap-32 pr-12 h-5/6'>
        <img src="trending1.jpg" className='w-5/6 desktop:w-5/6 desktop:h-10/12'/>
        <div className='grid gap-4'>
          <p className='text-2xl '>A.Kjaerbede Zan square sunglasses in champagne</p>
          <div>
            <p className='text-xl'>Brand Name:</p>
            <p>A.Kjaerbede</p>
          </div>
          <div>
            <p className='text-xl'>Product Type:</p>
            <p>Bag</p>
          </div>
          <div>
            <p className='text-xl '>Price:</p>
            <p>$52</p>
          </div>
          <div>
            <p className='text-xl'>Colors:</p>
            <div className='bg-pink-700 w-4 h-4 text-pink-700'></div>
          </div>
        </div>  
      </div>
        <div className='grid grid-rows-3 gap-8 mt-12 ml-[40%] desktop:mt-4 desktop:ml-0'>
          <div className='flex'>
            <TiLocation size={25}/>
            <p className='text-xl'>Delivered to location</p>
          </div>
          <div className='flex gap-3'>
            <p className='text-xl'>Quantity:</p>
            <input type="Number" className='w-12' />
          </div>
          <p className=' bg-orange-500 w-max p-2 rounded-md '>Add To Cart</p>
        </div>
      </div>
      <div>
        <h1 className='text-3xl ml-[40%]'>  Similar Items</h1>
        <Products items={items}/>
      </div>
    </div>
  )
}

export default Product