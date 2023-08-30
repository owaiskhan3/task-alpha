import React from 'react'

const Header = ({ isAdd,setIsBack }) => {
    return (
        <div className="w-full h-14 flex items-center justify-between border-b-2 border-b-gray-300">
            {!isAdd ?
                <>
                    <div className='w-1/8 ml-5'>
                        Edit
                    </div>
                    <div className='w-4/6'>
                        Tokens
                    </div>
                    <div onClick={()=>setIsBack(true)} className='w-1/6 mr-2'>
                        +
                    </div>
                </>
                :
                <>
                    <div className={`w-1/8 ml-5 ${isAdd?'text-white touch-none':''}`}>
                        Edit
                    </div>
                    <div className='w-4/6'>
                        Tokens
                    </div>
                    <div onClick={()=>setIsBack(false)} className='w-1/6 mr-2'>
                        Back
                    </div>
                </>}
        </div>
    )
}

export default Header
