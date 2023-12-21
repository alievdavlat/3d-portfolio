import React from 'react'
import {vVerticalTimeline, VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from 'react-i18next';


const ExperienceCard = ({item}) => (
<>
<VerticalTimelineElement 
    contentStyle={{ background:'#1d1836', color:'#fff'}}
    contentArrowStyle={{ borderRight:'7px solid #232631'}}
    date={item.date}
    iconStyle={{background: item.iconBg}}
    icon={
      <div>
        <img src={item.icon} alt={item.companny_name} className='w-[60%] h-[60%] object-contain' />
      </div>
    }
>

<div>
  <h3 className='text-white text-[24px] font-bold'>
    {item.title}
  </h3>
    <p
      className='text-secondary text-[16px] font-semibold'
      style={{ margin: 0 }}
    >
    {item.company_name}
    </p>
</div>


<ul className='mt-5 list-disc ml-5 space-y-2'>
    {
      item.points.map((point , index) => (
        <li key={`'experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
        </li>
      ))
    }
</ul>

</VerticalTimelineElement>
</>
)


const Experience = () => {

const [t] = useTranslation()

  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t('work.subTitle')}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t('work.title')}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map( (item, index ) => (
              <ExperienceCard  key={item.title} item={item} />
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience , 'work')