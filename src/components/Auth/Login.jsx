import React from 'react'
import { useState } from 'react';

function Login({handleLogin}) {

    // console.log(handleLogin)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email , password)
        setemail('')
        setpassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-gray-600 p-20'>
            <form 
            onSubmit={(e) =>{
                submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required 
                className = 'outline-none bg-transparent border-2 border-gray-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                required 
                className = 'outline-none bg-transparent border-2 border-gray-600 font-medium text-lg py-2 px-6 mt-8 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className = 'outline-none  border-2 border-gray-600 font-medium text-lg py-2 px-6 rounded-full mt-8 bg-blue-400'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login