import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {  Globe } from "lucide-react";
import {getItemAtStorage} from '../hooks/useStorage.js'




const Navbar = ({isOpenToggleSide, setIsToggleSide}) => {
  const [active, setActive] = React.useState("");
  const [ toggle , setToggle ] = React.useState(false)
  const {adminEnrolled} = useSelector(state => state.admin)
  const [t] = useTranslation();
  const account = getItemAtStorage('account')


  return (
    <nav
      className={`
    ${styles.paddingX} 
    flex w-full 
    items-center
    py-5
    top-0 
    fixed
    z-20
    bg-primary
  
    `}>

      

      <div className="w-full flex  max-sm:justify-evenly  justify-between  items-center max-w-7xl mx-auto">
       
        {/* logo  */}
        <Link
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>

          <img src={logo} alt="logo" className="object-contain w-14 h-12" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {t('logo')} &nbsp;
            <span className="sm:block hidden">{t('subLogo')}</span>
          </p>

        </Link>

          
        
          {/* desktop navigation   */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
         {
          account && 
           <Link to={'/admin'}>
            Admin
          </Link>
         }
          {navLinks.map((link, index) => (
            <li
              key={link}
              className={`${
                active === link ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link)}>
              <a href={'#'+link}>{t(`naigations.${index}`)}</a>
            </li>
          ))}

          
          {
          adminEnrolled && <li className="hover:text-white text-secondary text-[18px] font-medium cursor-pointer">
          <Link to={'/admin/dashboard'}>
              {t('adminLink')}
          </Link>
          </li>
          }

        </ul>


          <div>
          {
           !isOpenToggleSide &&  <Globe   onClick={() => setIsToggleSide(!isOpenToggleSide)} style={{color:'white', cursor:'pointer'}} />
           }    
            </div>    
            

        {/* mobile navigation   */}
        <div className="sm:hidden flex  justify-end items-center">
         
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
           className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
           >
           <ul className="list-none flex justify-end items-start flex-col gap-4">
         {
          account && 
           <Link to={'/admin'}>
            Admin
          </Link>
         }
         {navLinks.map((link, index) => (
            <li
              key={link}
              className={`${
                active === link ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link)}>
              <a href={'#'+link}>{t(`naigations.${index}`)}</a>
            </li>
          ))}

          {
          adminEnrolled && <li className="hover:text-white text-secondary text-[18px] font-medium cursor-pointer">
          <Link to={'/admin/dashboard'}>
          {t('adminLink')}
          </Link>
          </li>
          }       
           </ul>

           </div>


        </div>

          
         
          
      </div>
    </nav>
  );
};

export default Navbar;
