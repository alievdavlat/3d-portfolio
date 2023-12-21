import React from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Socials, ToggleNav, LoginBtn, Profile, Modal } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../../redux/localeSlice';
import { useTranslation } from 'react-i18next';
import {  X } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import { locales } from '../../constants';


const Home = () => {
  const dispatch = useDispatch()
  const { testimonials, workExp } = useSelector((state) => state.sections);
  const [t]  = useTranslation()
  const [isOpenToggleSide, setIsToggleSide] = React.useState(false);
  const account = useAuth()


  return (
        
        <div className='relative z-0 bg-primary'>
        
        
           <ToggleNav isOpenToggleSide={isOpenToggleSide}>
          <span className='text-white pl-5 cursor-pointer text-3xl' onClick={() => setIsToggleSide(false)}>
           <X/>
          </span>

           <ul className='w-full h-full pl-5 py-16'>
             <li className='w-full cursor-pointer items-center justify-center flex gap-3 py-5'> <span>{t('Languages')}</span></li>

             {
           locales.map((item , index) => (
             <li key={item.id} className='flex items-center gap-4 mt-3 cursor-pointer p-5' onClick={() => dispatch(changeLang(item.name))}>
               <img src={item.icon} className='w-[50px] h-[50px] rounded-full ' alt="icon" /> 
                {item.name}
             </li>
             ))
            } 

           </ul>
           <Link to={account ? '/' : '/login'} className='flex items-center justify-center'>
             {account ? <Profile/> : <LoginBtn/>}
           </Link>

       
           </ToggleNav> 
      
      
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar isOpenToggleSide={isOpenToggleSide} setIsToggleSide={setIsToggleSide}/>
        <Hero/>
      </div>
      
      <About/>
        {   
        workExp &&  <Experience/>
        }
      <Tech />
      <Works/>
      {
        testimonials && <Feedbacks/>
      }

      <div className='relative z-0'>
          <Contact/>
        <StarsCanvas/>
      </div>

      <footer className='mt-10 m-auto] flex justify-center items-center'>
        <>
        <Socials/>  
        </>
        
      </footer>
      </div>
      
    
  )
}

export default Home