import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate=useNavigate()
    const goToadmin=()=>{
        navigate("/Admin")
    }
    const goToresult=()=>{
      navigate("/cheakteam")
  }

  return (
    <>
    <div className='dashbored h-[100vh] w-[100%] absolute flex items-center justify-center'>
        <div className='text-white font-bold h-40 w-90 bg-transparent shadow-2xl mt-30 relative flex flex-col items-center justify-around'>
          <h1 className='para text-5xl  '>Ruslt Checking</h1>
          <div className='flex items-center justify-between w-[100%]'>
            <button  onClick={goToadmin} className='rounded-full px-[32px] py-2 bg-blue-700'>Admin</button>
            <button  onClick={goToresult}  className='rounded-full  bg-blue-700 px-[33px] py-2'>Result</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Dashboard
