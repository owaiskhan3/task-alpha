import React from 'react';
import Image1 from '../icons/app1.png';
import Image2 from '../icons/app2.png';

const Token = ({data}) => {
  return (
    <div className='w-full h-15 flex items-center justify-center border-b-2 border-gray-200 py-2'>
      <div className='w-1/6 h-12 flex items-center justify-center'>
        <img src={URL.createObjectURL(data.file)} className='w-10 hh-10' alt='icon' />
      </div>
      <div className='w-4/6 text-left mx-2'>
        <div className='h-1/6 text-sm'>{data.name}</div>
        <div className='h-5/6 text-2xl font-semibold text-gray-500'>
            {`${data.num.toString().slice(0,3)} ${data.num.toString().slice(3)}`}
        </div>
      </div>
      <div className='w-1/6'>

      </div>
    </div>
  )
}

export default Token
