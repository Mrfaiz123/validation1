import React,{useEffect,useState} from 'react'

const Result = () => {

    const [card,setCard]=useState([{math:0,Urdu:0,che:0,eng:0,phy:0}])
    console.log(card,"hello");
    const [persontage,setpersontage]=useState('')
          console.log(persontage,"fghj");
    useEffect(()=>{

        var showresult=JSON.parse(localStorage.getItem("data"))
        console.log(showresult,"heloooo this is result");

        if(showresult){
            setCard(showresult)
        }
        const per = ((parseInt(card.math)+parseInt(card.Urdu)+parseInt(card.Physics)+parseInt(card.Chemistry)+parseInt(card.English)) / 500 )*100;
        setpersontage(per)
    },[])

  return (
    <>
    <div className='dashbored h-[100vh] text-4xl font-bold text-white w-[100%] absolute flex flex-col items-center justify-center' >
    
      <div className='border border-green-500 p-1'>    
        <div className='border border-green-500 p-2'>
          <h1 className=''>English Marks :{card.English}</h1>
          <h1>Urdu Marks : {card.Urdu}</h1>
          <h1>Math Marks : {card.Math}</h1>
          <h1>Physics Marks : {card.Physics}</h1>
          <h1>Chemistry Marks : {card.Chemistry}</h1>
          <h1>percentage: {persontage} %</h1>
        </div>
      </div>
       
    </div>
      
    </>
  )
}

export default Result
