import React, { useState, useEffect } from 'react';
import Products from '../home page/products';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import queryString from 'query-string'

const Collections = () => {
  //zimbiye products new render yarekut
  //homepage lay search sitareg collections page wesdo search miyasayew 
  //cart icon😭😭
  const [cartItems, setCartItems] = useState(0);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const addToCart = (id) => {
    setCartItems(prev => prev + 1);
    fetch('http://localhost:3000/newItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, user: 'bek' })
    });
  };

  useEffect(() => {
    const {value} = queryString.parse(location.search)
    if(value){

      setSearchValue(value)
    }
    
    const fetchApi = async () => {
      try {
        const result = await fetch('http://localhost:8000/products');
        const data = await result.json();
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    
    const search = () => {
      if (!searchValue.trim()) {
        setFilteredItems(items); 
      } else {
        const lowercasedSearchValue = searchValue.toLowerCase();
        const filtered = items.filter(item => 
          item.name.toLowerCase().includes(lowercasedSearchValue) ||
          item.colour.toLowerCase().includes(lowercasedSearchValue) ||
          item.brandName.toLowerCase().includes(lowercasedSearchValue) ||
          item.groupId.toLowerCase().includes(lowercasedSearchValue)
        );
        setFilteredItems(filtered);
      }
    };
    
    search();
  }, [searchValue, items]);

  return (
    <div>
      <div className="flex-1 pl-4 pt-4 pr-4 w-auto">
        <div className="flex justify-between items-center mb-4 ">
          <div className='flex laptop:w-1/5 shadow-slate-300 shadow-md'>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
              type="text" 
              placeholder="Search" 
              className="w-11/12 p-2 rounded-tl-3xl rounded-bl-3xl outline-none" 
            />
            <BsSearch 
              size={25}
              className='bg-white h-auto rounded-br-3xl rounded-tr-3xl pr-2 hover:cursor-pointer'
              onClick={() => search()}
            />
          </div>
          <Link className='fixed justify-end ml-[50%] mt-4' to='/checkOut'>
            <p className='text-[8px] text-white ml-auto bg-red-700 w-fit p-1 rounded-[50%]'>{cartItems}</p>
            <TiShoppingCart size={30} className='cursor-pointer z-10'/>
          </Link>
          <div className="flex space-x-8 laptop:space-x-32">
            <Link to="/" className="text-black">Home</Link>
            <Link to="collections" className="text-orange-500">Collections</Link>
            <Link to="/aboutUs" className="text-black">About Us</Link>
          </div>
        </div>
      </div>
      <Products items={filteredItems} addToCart={addToCart}/>
    </div>
  );
};

export default Collections;
