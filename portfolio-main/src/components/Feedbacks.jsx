import React from 'react'
import { motion } from 'framer-motion';

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import {  textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import FeedbackCard from './generics/FeedbackCard';
import { useTranslation } from 'react-i18next';




const Feedbacks = () => {
  const [t] = useTranslation()

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>{t('testimonials.subTitle')}</p>
            <h2 className={`${styles.sectionHeadText}`}>{t('testimonials.title')}</h2>
          </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          testimonials.map(( item , index) => (
            <FeedbackCard key={item.name} index={index} {...item}/>
          ))
        }
      </div>
    </div>
  )
}

export default  SectionWrapper(Feedbacks, '')