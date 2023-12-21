import React from 'react'
import { services } from '../../../constants'
import StackCards from '../../generics/StackCards'

const Stack = () => {
  return (
         <div className='w-full '>
        <h2 className='relative block max-xs:ml-[70px]  mb-7 ml-2 text-[24px]'>
          My Stcks
        </h2>
    <div className='flex w-full max-xs:flex-col max-xs:pr-32 max-xs:gap-20  py-8  items-center justify-around   pt-16'>
         {
            services.map(item => <StackCards {...item}/>)
          }
    </div>
         </div>
  )
}

export default Stack