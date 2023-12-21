import React from 'react'
import { Button, Skils} from '../components'


const RestSkils = () => {
  return (
    <div >
      <Skils/>

      <div className=' flex max-xs:left-3  items-center  justify-center relative bottom-[0px] pr-10'>
      <Button title={'Back'} path = {'/'}/>
      </div>
    </ div>
  )
}

export default RestSkils