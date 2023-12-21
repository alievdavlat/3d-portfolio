import React from 'react'
import {SectionManageCards} from '../../../components'


const SectionSettings = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center gap-8'>
    
    <h1 className='text-[32px] max-xs:text-[20px]'>Sections manage</h1>
      
    <div className='flex max-xs:flex-col flex-row  justify-center gap-10 items-center w-full'>
      <SectionManageCards  />
      
    </div>
    
    </div>
  )
}

export default SectionSettings