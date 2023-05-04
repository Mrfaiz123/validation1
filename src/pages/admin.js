import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

  const navigate=useNavigate()

    const [password,setpassword]=useState("")
    
    const justGo=()=>{

        localStorage.setItem("password",password)
        if(password !== ""){ 
        navigate("/Go")
      }
      else{
        alert('plzz enter password')
      }
    }

  return (
    <>
    <div className='go h-[100vh] w-[100%] flex flex-col items-center justify-center' >
      <div className='text-white h-[40vh] w-[100%] flex flex-col items-center justify-around'>
        <h1 className="heading font-extrabold text-6xl ">Hi! Admin Please Enter Password</h1>
        <div className='flex justify-between w-[35%] font-bold'>
          <input className='rounded-xl px-5 py-2 text-black w-[340px]' onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter Password'/>
          <button className='rounded-xl px-5 py-3 bg-yellow-500'  onClick={justGo}>GO ... !</button>
        </div>
      </div>
      <h1 className='font-bold text-4xl text-white'>Worng Password</h1>
    </div>

    </>
  )
}

export default Admin
