import React, { useState } from 'react'
import { BsPerson, BsSearch, BsBag } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const [searchValue, setSearchValue] = useState("")
  const location = useLocation()

  const search = async () => {
    window.location.href = `http://localhost:5173/collections?value=${searchValue}`
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-orange-500' : 'text-black'
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className='flex laptop:w-1/5'>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          type="text"
          placeholder="Search"
          className="w-11/12 p-2 rounded-tl-3xl rounded-bl-3xl outline-none"
        />
        <BsSearch 
          size={25} 
          className='bg-white h-auto rounded-br-3xl rounded-tr-3xl pr-2'
          onClick={search}
        />
      </div>
      <div className="flex space-x-8 laptop:space-x-32">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/collections" className={isActive("/collections")}>
          Collections
        </Link>
        <Link to="/aboutUs" className={isActive("/aboutUs")}>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Nav;
