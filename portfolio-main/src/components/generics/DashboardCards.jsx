import React from 'react'
import { dashboardCardsItems } from '../../constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAdminpageShowing } from '../../redux/adminSlice'

const DashboardCards = () => {
  const dispatch = useDispatch()



  return (

    <div className='flex mx-auto custom-crds-wr w-full items-center justify-around'>
      {
        dashboardCardsItems.map((item , index) => (
          <Link to={'/admin/dashboard' + item.path} key={item.id} onClick={() => dispatch(setAdminpageShowing(item.title.toLowerCase())) }>
          <div  className="py-5 cursor-pointer flex justify-center items-center">
          <div className="obj relative w-[200px] h-[200px]">
              <div className="objchild absolute w-full h-full">
                  <span className="inn6 absolute w-full h-full"></span>
                  
                  <div className='flex items-center justify-center gap-11 w-full'>
                  <span className='text-[22px]'>{item.title.toUpperCase()}</span>
                  </div>
      
              </div>
          </div>
      </div>
          </Link>
        )) 
      }

    </div>
  )
}

export default DashboardCards