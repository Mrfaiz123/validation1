import React from 'react'
import { useNavigate } from 'react-router-dom'
//import useState from "React"
import {useState} from 'react'

const Cheakresult = () => {

  const [rollNumber,setRoll]=useState("") 
  //const rollNo=(e)=>{
  //  setRoll({...rollNumber,[e.target.name]:e.target.value})
  //}
  console.log(rollNumber,"454653421885");
   
  const navigate=useNavigate()


    const goToresult=()=>{

       const getstdRoll=JSON.parse(localStorage.getItem('Roll'))

        console.log(getstdRoll,"your password");

        if(rollNumber == getstdRoll){
          console.log("match");
          navigate("/result")
        }
        else{
        alert('Your roll no not match');
          console.log("not match");
        }
    }
    

  return (
    <>
    <div className='go h-[100vh] w-[100%] absolute flex items-center justify-center'>
        <div className='p-1 w-[60%] h-[60%] border border-green-500'>
          <div className='text-white text-center font-bold w-[100%] h-[100%] border border-green-500 flex flex-col items-center justify-around'>
              <h1 className='text-4xl' >Martic SSC -Part II Result 2020</h1>
              <div className='bg-green-500 w-[100%] rounded-xl p-2 text-2xl '>Serach By Roll No</div>
              <div className='flex flex-col items-center justify-evenly w-[50%] '>
                  <h1 className='text-3xl'>Enter Roll No</h1>
                  <input placeholder='Enter Roll Number' name='RollNO' className='rounded-xl p-2 w-[100%] text-gray-600 border' onChange={(e)=>{setRoll(e.target.value)}}/>
                  <button className='mt-5 rounded-lg px-5 py-2 bg-green-500 '  onClick={goToresult}> Get Result </button>
              </div>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default Cheakresult
