import React from 'react'
import { motion } from 'framer-motion'


import { styles } from '../style'
import {  services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper } from '../hoc'
import ServiceCard from './generics/ServiceCard'
import { useTranslation } from 'react-i18next'






const About = () => {

  const [t] = useTranslation()

  return (

      <section id='about'>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('stacks.subTitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('stacks.title')}</h2>
      </motion.div>

      <motion.p variants={fadeIn('','', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {t('stacks.descr')}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title}  index={index} {...service} />
          ))
        }
      </div>
      </section>
    )
}

export default SectionWrapper(About , 'about')