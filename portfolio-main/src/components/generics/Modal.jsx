import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='flex w-screen z-50 h-screen absolute justify-center items-center bg-[rgba(0,0,0,0.6)]'>
        <div className='p-16 px-20 bg-tertiary rounded-lg '>
            {
              children
            } 
        </div>
    </div>
  )
}

export default Modal