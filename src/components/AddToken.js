import React, { useState } from 'react'
import Header from './Header'

const AddToken = ({addToken}) => {
    const [file,setFile]= useState(null);
    const [name,setName]= useState(null);

    const inserToken =()=>{
        addToken({
            file,
            name
        });
        setFile(null);
        setName(null);
    }

  return (
    <div className='flex flex-col p-5 items-start'>
      <form className='flex flex-col items-start' onSubmit={inserToken}>
        <label>
            Choose Icon
        </label>
        <input className='mb-10' type='file' placeholder='Choose Picture' onChange={(e)=>setFile(e.target.files[0])} />
        <input type='text' placeholder='Enter Token Name' onChange={(e)=>setName(e.target.value)}/>

        <button className='w-1/3 h-10 rounded-md p-2 bg-blue-400 my-4 text-white' onClick={inserToken}>
            Submit
        </button>
      </form>
    </div>
  )
}

export default AddToken
