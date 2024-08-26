import React,{useState} from 'react'
import {FaEye,FaEyeSlash} from 'react-icons/fa'

const SigninPage = () => {
  
  const [signUp,setSignUp] = useState(false)
  const [focus,setFocus] = useState(true)
  const [userName,setUsername] = useState('')
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [passLen,setPassLen] = useState(false)
  const [takenUser,setTakenUser] = useState(false)
  const [noSign,setNoSign]= useState(false) 
  const [showPass,setShowPass] = useState('password')
  const [eye,setEye] = useState(true)
  const [error,setError] = useState(false)
  const [erroeMes,setErrorMes] = useState('')

  const signIn = async (e)=>{
    //sasibew bizu note ayasfelgim ezi lay straight forward new gin 
    //password length yemlew part eski yeteshale argew kechalk line 106 ena lelochum 
    fetch('http://localhost:3000/signin',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName,password })
    })
    .then(response=>response.json())
    .then(data =>{
      if (data.success){
        window.open(`http://localhost:5173/`)
      }else{
        setError(true)
        setErrorMes('Incorrect UserName or Password ')
      }
    })
    .catch(err=>console.log(err))
  }


  const signUpFunc = async ()=>{
  
    fetch('http://localhost:3000/signup',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  userName:userName,email:email ,password:password })
    })
    .then(response=>response.json())
    .then(data =>{
      if(data.message !== 'success'){
        console.log(data.message)
        setError(true)
        setErrorMes(data.message)
      }else{
        window.open('http://localhost:5173/')
      }
    })
    .catch(err=>console.log(err))
  }
  
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen ">
      {error?<div className='bg-white w-72 h-10 flex justify-between pl-10 rounded-md self-center'>
        {erroeMes}
         <div className='bg-red-600 w-4 h-full '><span className='text-red-600'>I</span></div>
    </div>:null}
  <main className="flex-grow flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <div className="flex justify-center mb-6">
        <button id="signInTab" 
        onClick={()=>{
          setSignUp(false)
          setFocus(true)
          setEmail("")
          setUsername("")
          setPassword("")
          setError(false)
        }}
        className={focus?`px-4 py-2 text-lg font-medium text-slate-700 border-b-2 border-slate-700`:`px-4 py-2 text-lg font-medium text-gray-500`}>Sign In</button>

        <button id="signUpTab" 
        onClick={()=>{
          setSignUp(true)
          setFocus(false)
          setEmail("")
          setUsername("")
          setPassword("")
          setError(false)
        }}
        className={focus?"px-4 py-2 text-lg font-medium text-gray-500":`px-4 py-2 text-lg font-medium text-slate-700 border-b-2 border-slate-700`}>Sign Up</button>
      </div>

      
      {!signUp ?<form id="signInForm" /* action="#" method="POST" */ className="space-y-6">
        <div>
          <label  className="block text-sm font-medium text-gray-700">UserName</label>
          <input id="userName" name="userName" type="userName" 
          onChange={(e)=>{
            setUsername(e.currentTarget.value)
          }}
          value={userName}
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              if(password.length >8){
                signIn()
              }else{
                setPassLen(true)
              }
            }
          }}
          autoComplete="off" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          {takenUser? <span>This user name is taken</span>:null}
        </div>
        <div>
          <label  className="block text-sm font-medium text-gray-700">Password</label>
          <div className='flex'>
            <input id="password" name="password" type={showPass} autoComplete="current-password" required 
            onChange={(e)=>{
              setPassword(e.currentTarget.value)
              
              if(password.length>8){
                setPassLen(false)
              }
            }}
            value={password}
            onKeyDown={(e)=>{
              setPassLen(true)
              if(e.key === "Enter"){
                if(password.length >8){
                  signIn()
                }else{
                  setPassLen(true)
                }
              }
            }}className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            {eye?<FaEye onClick={()=>{
                setEye(false)
                setShowPass('text')

            }}/>:<FaEyeSlash onClick={()=>{
              setEye(true)
              setShowPass('password')
          }}/>}
          </div>
          
          {passLen? <span className='text-red-800'>Password Length cannot be less than 8</span>:null}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-slate-700 focus:ring-indigo-500 border-gray-300 rounded"/>
            <label  className="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={(e)=>{
            e.preventDefault()
            signIn()
          }}
          >Sign in</button>
        </div>
      </form>:null}

      
      {signUp ?<div id="signUpForm" /* action="#" method="POST" */ className="space-y-6 ">
        <div>
          <label className="block text-sm font-medium text-gray-700">UserName</label>
          <input id="name" name="name" type="text" required 
          onChange={(e)=>{
            setUsername(e.currentTarget.value)
          }}
          value={userName}
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              if(password.length >8){
                signUpFunc()
              }else{
                setPassLen(true)
              }
            }
          }}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
        <div>
          <label  className="block text-sm font-medium text-gray-700">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required 
          onChange={(e)=>{
            setEmail(e.currentTarget.value)
            
          }}
          value={email}
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              if(password.length >8){
                signUpFunc()
              }else{
                setPassLen(true)
              }
            }
          }}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
        <div>
          <label  className="block text-sm font-medium text-gray-700">Password</label>
          <div className='flex'>
          <input id="password" name="password" type={showPass} autoComplete="new-password" required 
          onChange={(e)=>{
            setPassword(e.currentTarget.value)
            if(password.length>8){
              setPassLen(false)
            }else{
              setPassLen(true)
            }
          }}
          value={password}
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              if(password.length >8){
                signUpFunc()
              }else{
                setPassLen(true)
              }
            }
          }}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
           {eye?<FaEye onClick={()=>{
                setEye(false)
                setShowPass('text')

            }}/>:<FaEyeSlash onClick={()=>{
              setEye(true)
              setShowPass('password')
          }}/>}
          </div>
          {passLen? <span className='text-red-800'>Password Length cannot be less than 8</span>:null}
        </div>
        <div>
          <button type="submit" 
          onClick={(e)=>{
            e.preventDefault()
            if(password.length>8 & email.endsWith('@gmail.com')){
              signUpFunc()
            }
            }}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
        </div>
      </div>:null}
    </div>
  </main>

  <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
    <p>&copy; 2024 NUNA Enawra. All rights reserved.</p>
  </footer>
  </div>
  )

}

export default SigninPage