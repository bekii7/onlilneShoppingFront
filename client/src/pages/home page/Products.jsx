import React, { useEffect, useState } from 'react';
import { IoCall, IoBag } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Products = ({ items, addToCart }) => {
  //be category filter yaregal ante listun bicha keyrew
  //photo load ayaregimm alegn berase slehone yaw esun part astekaklew 
  const [activeCategories, setActiveCategories] = useState('All')
  const [filter, setFilter] = useState(items || [])

  const active = 'pl-6 pr-6 mb-3 bg-orange-400 font-bold w-max rounded-lg hover:cursor-pointer shadow-lg shadow-orange-300';
  const inActive = 'pl-6 pr-6 mb-3 bg-[#F5F5DC] font-bold w-max rounded-lg hover:cursor-pointer shadow-lg hover:bg-orange-400';

  const categories = ['All', 'Men', 'Women', 'Kids', 'Bags', 'Dress']

  const categoryFilter = (category) => {
    if (category !== 'All') {
      const categoryItems = items.filter(item => item.groupId === category.toLowerCase())
      setFilter(categoryItems)
    } else {
      setFilter(items)
    }
    setActiveCategories(category)
  }
  useEffect(() => {
    setFilter(items || [])
  }, [items]); 

  return (
    <div className='w-full h-screen mt-2 p-4 laptop:pl-32 laptop:pr-32'>
      <div className='pl-4 pr-4 flex justify-between overflow-x-auto'>
        {location.pathname === "/product"?null:categories.map((category) => (
          <p key={category} className={activeCategories === category ? active : inActive}
            onClick={() => categoryFilter(category)}>
            {category}
          </p>
        ))}
      </div>
      <div className='grid grid-cols-3 laptop:grid-cols-5'>
        {Array.isArray(filter) && filter.map((item) => (
          //items
          <Link to={`/product?item=${item.id}`} key={item.id} className="rounded-lg p-4 w-5/6 m-8 border shadow-lg hover:scale-110 h-auto hover:cursor-pointer"
          
          >
            <img src="trending2.jpg" className='w-auto h-40' alt={item.name} />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className='flex justify-between mt-2'>
              <p className="text-gray-600">$ {item.price.current.value}</p>
              <div className='flex gap-2 text-center bg-orange-400 rounded-2xl pl-3 pr-3 text-white hover:scale-110 hover:shadow-lg hover:shadow-orange-600 hover:cursor-pointer'
                onClick={() => addToCart(item.id)}>
                <IoBag className='mt-1' color='white' />
                <p>Add</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
