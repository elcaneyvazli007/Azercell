import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const modal = () => {
  return (
    <div className="fixed h-screen w-screen top-0 right-0 bottom-0 grid place-content-center">
        <div className="relative bg-white w-[60rem] h-[20rem] rounded-[1.5rem] flex flex-col px-[2rem] py-[3rem]">
            <div className="relative flex z-50 flex-row items-center justify-between w-full">
                <h1 className="text-[1.8rem] text-primary font-bold">Rabitə Xətti</h1>
            </div>
        </div>
        <AiOutlineCloseCircle className='text-[3rem]' onClick={() => setModal(false)}/>
    </div>
  )
}

export default modal