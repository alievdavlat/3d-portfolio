import React from 'react'
import useAuth from '../../hooks/useAuth.js'
import { useNavigate } from 'react-router-dom'
import { useInputValue } from '../../hooks/useInputValues.js'
import { slideIn } from '../../utils/motion.js'
import { motion } from 'framer-motion'
import { StarsCanvas } from '../../components/index.js'
import { useTranslation } from 'react-i18next'
import { UseAxios } from '../../hooks/useAxios.js'
import { useDispatch } from "react-redux";
import { notification } from "antd";
import { setAccount } from '../../redux/adminSlice/index.js'




const Login = () => {
  const [t] = useTranslation()
  const [loading , setLoading] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const account  = useAuth()


  const { value, change } = useInputValue({
    username:"",
    password:"",
  })
  
  React.useEffect(() => {
    // if(account) navigate('/') 
    
  }, [account])  

  const handlesubmit = async (e) => {
      e.preventDefault()

      const request = UseAxios()

      try {
        
        const response = await request({
          url: "/login",
          method: "POST",
          body: { ...value },
        })

        if (response.status != 200 ) {
          return notification.error({ message:response?.message})
        }

        if (response?.status === 200 && response?.data?.msg) {
          notification.success({ message:response?.data?.msg})
        }
        console.log(response?.data?.account);
        dispatch(setAccount(response?.data?.account))
        return navigate('/admin')

      } catch (err) {
        console.log(err);
      }

     
  }


  
  return (

    <motion.div
    variants={slideIn("left" , "tween", 0.2, 1)}
    className='flex-[0.75] z-0 relative bg-black-200  h-screen rounded-2xl p-10 flex items-center justify-center flex-col'
  >

      <StarsCanvas/>

    <h3 className='text-white font-semibold text-3xl'>
      {t('LoginPage.title')}
    </h3>

  <form
    onSubmit={handlesubmit}
    className='mt-12 flex flex-col gap-8 bg-black-100 p-10 w-[600px] h-[450px]  justify-center rounded-lg'
  >
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>{t('LoginPage.label1')}</span>
      <input
        type='text'
        name='username'
        value={value.username}
        onChange={change}
        placeholder={t('LoginPage.place1')}
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>{t('LoginPage.label2')}</span>
      <input
        type='password'
        name='password'
        value={value.password}
        onChange={change}
        placeholder={t('LoginPage.place2')}
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      />
    </label>


    <button
      type='submit'
      className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
    >
      {loading ? t('LoginPage.btn2') : t('LoginPage.btn1')}
    </button>
  </form>

  </motion.div>

  )
}

export default Login