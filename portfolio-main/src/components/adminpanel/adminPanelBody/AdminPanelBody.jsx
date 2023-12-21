import React from 'react'
import { motion  } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { slideIn } from '../../../utils/motion'
import { styles } from '../../../style'
import {  useSelector } from 'react-redux'
import { Skils, Stack, DashboardCards, Works, CreateForms, SectionSettings} from '../../../components'
import { useTranslation } from 'react-i18next'




const AdminPanelBody = () => {
  const { adminSectionShowing } = useSelector(state => state.admin)
  const [t ] = useTranslation()

  const params = useParams()

  const { id , subid} = params


  return (
    <>
  <section className="home-section">
  <Link to={'/'} className='w-full p-10 max-sm:justify-center max-sm:items-center flex justify-end'>
      <button className='text-white text-[18px] p-5 bg-tertiary rounded-xl mb-5'>
        {t('backhome')}
      </button>
    </Link>
    <div className="text ">
    
    <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Management</p>
        <h3 className={styles.sectionHeadText}>{id?.toUpperCase() || 'Dashboard.'}  { subid &&  '  ' + '-' + subid?.toUpperCase()} .</h3>
        </motion.div>
    </div>

        <div>
      <DashboardCards/>
        </div>

      <div className='flex items-center justify-around  dashboard-body p-16 mt-[120px]'>
                  
        

          {
            adminSectionShowing == 'skils' && <Skils/>
          }

          {
            adminSectionShowing == 'stacks' && <Stack/>
          }

          {
            adminSectionShowing == 'projects' &&  <Works/>
          }

          {
            adminSectionShowing == 'Create Project' &&  <CreateForms/>
          }

          {
            adminSectionShowing == 'Create Skils' &&  <CreateForms/>
          }

          {
            adminSectionShowing == 'Create Testimonials' &&  <CreateForms/>
          }

          {
            adminSectionShowing == 'Create Experience' &&  <CreateForms/>
          }
          {
            adminSectionShowing == 'Create Stack' &&  <CreateForms/>
          }

          {
            adminSectionShowing == 'Settings' &&  <SectionSettings/>
          }
           {
            adminSectionShowing == 'Dashboard' && ''
          }
      </div>


  </section>
    </>
  )
}

export default AdminPanelBody