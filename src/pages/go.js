import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const GO = () => {

    const navigate=useNavigate()

    const [Name,setname]=useState("")
    const [Roll,setRoll]=useState("")


    const MarkSheet=()=>{

        localStorage.setItem("name",Name)
        localStorage.setItem("Roll",Roll)

        //alert('Enter your Numbers');
        if(Roll !== ""){
            navigate("/MarkSheet")
        }
        else{
            alert('PLzzz Enter Roll Numbers')
        }

    }
    
  return (
    <>
    <div className='dashbored  h-[100vh] w-[100%] absolute flex items-center justify-center'>
        <div className=' flex flex-col h-[30vh] w-[54%] items-center justify-around '>
            <div className='flex  justify-between w-[100%]'>
                <input className='rounded-xl px-5 py-2 text-black w-[340px]' onChange={(e)=>{setname(e.target.value)}} placeholder='Enter Name'/>
                <input className='rounded-xl px-5 py-2 text-black w-[340px]' onChange={(e)=>{setRoll(e.target.value)}} placeholder='Enter Roll-Number'/>
            </div>
            <button className='rounded-xl px-[120px] py-3 bg-yellow-500' onClick={MarkSheet} >Enter</button>
        </div>
    </div>
      
    </>
  )
}

export default GO
