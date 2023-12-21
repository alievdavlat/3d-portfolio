import React from 'react'
import useAuth from '../../hooks/useAuth'

const Profile = () => {

  const account = useAuth()


  return (
<div className="font-sans h-[120px] w-full flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto bg-black-100  shadow-xl hover:shadow">
     <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-[#000]" src={`${account?.image || 'https://avatars.githubusercontent.com/u/67946056?v=4'}`} alt="avatar" />
     <div className="text-center mt-2 text-3xl font-medium">{account?.username || 'username'}</div>
     <div className="text-center font-normal text-lg">{account?.lastname}</div>
     <div className="px-6 text-center mt-2 font-light text-sm">
       <p>
        {account?.stack || 'Fullstack developer'}
       </p>
     </div>
  </div>
</div>
  )
}

export default Profile