import React from 'react'
import {Sidebar, AdminPanelBody, StarsCanvas} from '../../components'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'


const AdminPanel = () => {
  const account = useAuth()
  const navigate = useNavigate()
  React.useEffect(() => {
    
    if(!account)  navigate('/')

  }, [account])

  return (
    <div className=' z-0 bg-primary relative'>
      <StarsCanvas/>
     <Sidebar account = {account}/>

     <AdminPanelBody/>
    </div>
  )
}

export default AdminPanel