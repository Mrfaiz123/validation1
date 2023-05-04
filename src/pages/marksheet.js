import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const MarkSheet = () => {

    const navigate=useNavigate()

    const [AllData,setAllData]=useState("")
    
    const subjects=(e)=>{

        setAllData({...AllData,[e.target.name]:e.target.value})
        console.log(AllData,"sub");
    }

   
    const Update=()=>{
        
        localStorage.setItem('data',JSON.stringify(AllData)) 
        if(AllData!=""){
        navigate("/")
    }
    else{
        alert('Plzzz UpDated Your Nmber ');

    }

        
    }
    const Goback=()=>{
        navigate("/Go")
    }

   
    
  return (
    <>
    <div className='go h-[150vh] w-[100%] flex flex-col items-center justify-around'>
        <div className='box w-[45%] h-[70%] bg-gray-400 rounded flex flex-col items-center justify-center '>
            <div className='w-[50%] h-[80%] text-[cyan]'>
                <h1 className='text-center font-bold text-4xl'>Marks Sheet</h1>
                <p className='mt-5 '>English Marks:</p>
                <input className='rounded-xl px-5 py-2 mt-2 w-[100%] text-gray-500 font-bold' name='English' onChange={subjects} placeholder='Add Number'/>
                <p className='mt-2 '>Urdu Marks:</p>
                <input className='rounded-xl px-5 py-2 mt-2 w-[100%] text-gray-500 font-bold' name='Urdu' onChange={subjects} placeholder='Add Number'/>
                <p className='mt-2 '>Math Marks:</p>
                <input className='rounded-xl px-5 py-2 mt-2 w-[100%] text-gray-500 font-bold' name='Math' onChange={subjects} placeholder='Add Number'/>
                <p className='mt-2 '>Physics Marks:</p>
                <input className='rounded-xl px-5 py-2 mt-2 w-[100%] text-gray-500 font-bold' name='Physics' onChange={subjects} placeholder='Add Number'/>
                <p className='mt-2 '>Chemistry Marks:</p>
                <input className='rounded-xl px-5 py-2 mt-2 w-[100%] text-gray-500 font-bold' name='Chemistry' onChange={subjects} placeholder='Add Number'/>
            </div>
            <div className='w-[60%] h-[8%] flex justify-between'>
                <button className='rounded-xl px-[11%] py-3 bg-[cyan]' onClick={Update}>Update</button>
                <button className='rounded-xl px-[11%] py-3 bg-[cyan]' onClick={Goback}>Goback</button>
            </div>

        </div>
       
    </div>
      
    </>
  )
}

export default MarkSheet
