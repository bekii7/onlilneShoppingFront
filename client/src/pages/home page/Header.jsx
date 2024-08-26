import React,{useState} from 'react'
import { BsPerson,BsSearch,BsBag } from 'react-icons/bs'
import {TiShoppingCart} from 'react-icons/ti'
import { CgMail } from 'react-icons/cg'
import { IoCall,IoBag } from 'react-icons/io5'
import {FaInstagram} from 'react-icons/fa'
import  {MdArrowForwardIos,MdArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import Nav from './Nav'

//the trending part keld new beteshale menged siraw photo mikeyayirew malet new 
//gin demo sasibew hule egna update enargew trendingochun yizen line 16
//sign in sidereg yehone neger yinurew more personalized yihun
//profile page alserawm gin zimblen kezi befit yegezawn ena yahunun order yasay
const Header = ({addToCart}) => {
    const [trending,setTrending] = useState(1)
    const [signedIn,setSignedIn] = useState(false)
    
    

    let backgroundImage = `trending${trending}.jpg`
  
    const changeTrendig = ()=>{
      if(trending<3){
        setTrending(previous=>previous+=1)
      }else{
        setTrending(previous=>previous -=2)
      }
    }
    
    return (
      <div className="flex p-4  gap-4 bg-[#F5F5DC]">
        {/* icons */}
        <div className="w-20 bg-orange-400 flex flex-col items-center py-4 space-y-6 rounded-xl justify-between">
          <div className="mt-4 grid gap-12">
            <Link to={signedIn?'/profile':'/signin'}>
              <BsPerson size={30} className='cursor-pointer'/>
            </Link>
          </div>
          <div className='grid gap-12 pb-6'>
            <FaInstagram size={30} className='cursor-pointer'/>
            <CgMail size={30} className='cursor-pointer'/>
            <IoCall size={30} className='cursor-pointer'/>
          </div>
        </div>
          {/* search and navbar */}
        <div className="flex-1 p-4 w-auto">
          <Nav/>
  
              {/* Trending Items */}
          <div className="mb-6 flex justify-between gap-6 laptop:gap-36 ">
            <div className='w-96 h-64 rounded-lg flex justify-center items-center max-h-fit'
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",}}>
                  <div className='flex justify-between w-full p-2 '>
                    <MdArrowBackIos size={25} color='gray' className='hover:cursor-pointer'
                    onClick={()=>{
                      changeTrendig()}}/>
                    <MdArrowForwardIos size={25} color='gray' className='hover:cursor-pointer' 
                    onClick={()=>{changeTrendig()}}/>
                  </div>
    
                </div>
    
              <div className="mt-4 h-auto w-fit">
                <div className="grid items-center">
                  <h1 className="text-4xl font-bold">Trending Items</h1>
                  <p className="text-gray-600 mt-2">
                  Discover the latest trends in fashion with our exclusive collection. 
                  Whether you're looking for casual elegance or bold statements, we have something for everyone. Explore now and find your perfect style.
                  </p>
                  <button className="bg-lime-400 text-black py-2 px-4 rounded-lg w-52 justify-self-end laptop:mt-20">Explore More</button>
                </div>
            </div>
          </div>
              {/* our new collection */}
          <div>
            <h2 className="text-2xl font-bold mb-4 bg-orange-300 text-center">OUR NEW COLLECTION</h2>
            <div className="grid grid-cols-3 gap-4 pl-4">
              <div className=" rounded-lg p-4 w-max">
                <img src="trending1.jpg" className='w-auto h-40' />
                <h3 className="text-lg font-semibold">Beige Casual Bag</h3>
                <div className='flex justify-between'>
                    <p className="text-gray-600">$ 68,56</p>
                    <div className='flex gap-2 text-center bg-orange-400 rounded-2xl pl-3 pr-3 text-white hover:scale-110 hover:shadow-lg hover:shadow-orange-600 hover:cursor-pointer' 
                    onClick={()=>{
                      addToCart("beige casual bag",'68,56')
                    }}
                    >
              <IoBag className='mt-1' color='white'/>
              <p>Add</p>
            </div>
                  </div>
              </div>
              <div className=" rounded-lg p-4 w-max">
                <img src="trending2.jpg" className='w-auto h-40'/>
                <h3 className="text-lg font-semibold">Brown Casual Bag</h3>
                <div className='flex justify-between'>
                    <p className="text-gray-600">$ 68,56</p>
                    <div className='flex gap-2 text-center bg-orange-400 rounded-2xl pl-3 pr-3 text-white hover:scale-110 hover:shadow-lg hover:shadow-orange-600 hover:cursor-pointer'
                    onClick={()=>{
                      addToCart("beige casual bag",'68,56')
                    }}
                    >
              <IoBag className='mt-1' color='white'/>
              <p>Add</p>
            </div>
                  </div>
              </div>
              <div className="rounded-lg p-4 w-max">
                <img src="trending1.jpg" className='w-auto h-40'/>
                <h3 className="text-lg font-semibold">Orange Casual Bag</h3>
                  <div className='flex justify-between'>
                    <p className="text-gray-600">$ 68,56</p>
                    <div className='flex gap-2 text-center bg-orange-400 rounded-2xl pl-3 pr-3 text-white hover:scale-110 hover:shadow-lg hover:shadow-orange-600 hover:cursor-pointer'
                    onClick={()=>{
                      addToCart("beige casual bag",'68,56')
                    }}
                    >
              <IoBag className='mt-1' color='white'/>
              <p>Add</p>
            </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export {Header as default}