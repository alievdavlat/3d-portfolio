import React from 'react'

import {AdminPanel, Home, Login, SingleProject} from './pages'
import { Route, Routes } from 'react-router-dom'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from './utils/locales/en'
import { ru } from './utils/locales/ru'
import { uzKrill } from './utils/locales/uzKrill'
import { uzLotin } from './utils/locales/uzLotin'
import { useSelector } from 'react-redux';
import { RestSkils } from './components';


const App = () => {


  const { lang } = useSelector(state => state.locale)


  const resources = {
    en: {
      translation: en
    },
    ru: {
      translation:ru 
    },
    krill: {
      translation:uzKrill 
    },
    uz: {
      translation:uzLotin 
    },
  }

  i18n.use(initReactI18next).init({
    resources,
    lng:lang, 
    fallbackLng: lang, 
    interpolation: {
      escapeValue: false, 
    },
  });


  React.useEffect(() => {

    window.onload = function(){
      const sidebar = document.querySelector(".sidebar");
      const closeBtn = document.querySelector("#btn");
      const searchBtn = document.querySelector(".bx-search")
      const searchInput = document.querySelector('#sidebar_search')
      const sidebarItems = document.querySelectorAll('.sidebar_items')

      closeBtn.addEventListener("click",function(){
          sidebar.classList.toggle("open")
          menuBtnChange()
      })
  
      searchBtn.addEventListener("click",function(){
          sidebar.classList.toggle("open")
          menuBtnChange()
      })
  
      searchInput.addEventListener('input' , (e) => {
          let inpuVal = e.target.value.trim().toLowerCase()
    
    
          sidebarItems.forEach(item => {
           if (item.textContent.toLowerCase().includes(inpuVal)) {
              item.classList.remove('none')
           } else{
            item.classList.add('none')
           }
          })

      })

      
      function menuBtnChange(){
          if(sidebar.classList.contains("open")){
              closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
          }else{
              closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
          }
      }
  }



  }, [])

  
  

  return (
  
    <div className=' h-screen'>
  
     
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<AdminPanel/>} />
        <Route path='/admin' element={<AdminPanel/>} />
        <Route path='/skils' element={<RestSkils/>} />
        <Route path='/admin/:id' element={<AdminPanel/>} />
        <Route path='/singleproject' element={<SingleProject/>} />
        <Route path='/admin/:id/:subid' element={<AdminPanel/>} />
        <Route path='*' element={ <h1>page not found</h1> } />        

    </Routes>
    
      
    </div>


    )
}

export default App