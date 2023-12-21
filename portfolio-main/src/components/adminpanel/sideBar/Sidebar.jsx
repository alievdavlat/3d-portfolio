import React from 'react'
import { logo } from '../../../assets'
import { sidebarItems } from '../../../constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAdminpageShowing } from '../../../redux/adminSlice'



const Sidebar = ({account}) => {
  const dispatch = useDispatch()



return (
    <>
<div className="sidebar bg-black-100">

    <div className="logo_details">
      <img src={logo} alt="logo" className='w-[30px] h-[30px] icon' />
      <div className="logo_name ml-5 text-[18px]">Alev | Portfolio</div>
      <i className="bx bx-menu" id="btn"></i>
    </div>


    <ul className="nav-list">
      <li>
        <i className="bx bx-search"></i>
        <input type="text" id='sidebar_search' placeholder="Search..." />
         <span className="tooltip">Search</span>
      </li>
      
     
        {
          sidebarItems.map((item , index) => (
      <li key={item.id} className='sidebar_items' onClick={() => dispatch(setAdminpageShowing(item.title))}>
        <Link to={'/admin'+ item.path} className='sidebar_link'>
          <i className={item.icon} ></i>
          <span className="link_name">{item.title}</span>
        </Link>
        <span className="tooltip">{item.title}</span>
      </li>
          ))
        }

      <li className="profile">
        <div className="profile_details">
          <img src="profile.jpeg" alt="profile image"/>
          <div className="profile_content">
            <div className="name">Anna Jhon</div>
            <div className="designation">Admin</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out"></i>
      </li>

    </ul>
</div>
    </>
  )
}

export default Sidebar