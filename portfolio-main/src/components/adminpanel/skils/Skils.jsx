import React from 'react'
import { skilsItems } from '../../../constants'
import ServiceCard from '../../generics/ServiceCard'
import { textVariant } from '../../../utils/motion'
import { styles } from '../../../style'
import { motion } from 'framer-motion'
import Pagination from '../../generics/Pagination'
import { StarsCanvas } from '../../canvas'



const renderData  = (data) => (
  <div className='flex flex-wrap max-xs:flex-col items-center justify-center h-full gap-16'>
     
        {
          data?.map((item, index) =>  <ServiceCard key={item.name} {...item} index={index}  />)
        }

    </div>
)
  

const Skils = () => {

const [data , setData ] = React.useState([])

React.useEffect(() => {
   
  setData(skilsItems)
}, []);


  return (
    <div className='flex relative h-full z-0 flex-col gap-16 m-10'>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Skils</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      </motion.div>
        <Pagination  renderData={renderData} btnTitle={'Show More'} data={data}/>
    </div>
  )
} 

export default Skils