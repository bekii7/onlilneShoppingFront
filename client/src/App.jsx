import { useState } from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,Router,Link} from 'react-router-dom'
import './App.css'
import HomePage from './pages/home page/HomePage'
import SigninPage from './pages/signinPage/SigninPage'
import CheckOutPage from './pages/Checkout_page/CheckOutPage'
import Profile from './pages/profile/Profile'
import Collections from './pages/collections/Collections'
import AboutUs from './pages/about_us/AboutUs'
import Product from './pages/product_page/Product'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element = {<HomePage />}/>
        <Route path='/signIn' element = {<SigninPage/>}/>
        <Route path='/checkOut' element = {<CheckOutPage/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/collections' element = {<Collections/>}/>
        <Route path='/aboutUs' element = {<AboutUs/>}/>
        <Route path='/product' element = {<Product/>}/>
        
      </Route>
      
    )
  )
return <RouterProvider router = {router} />
}

export default App
