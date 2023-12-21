import React from 'react'
import { motion } from 'framer-motion';

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import { styles } from '../style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Tech = () => {

const [t] = useTranslation()


  return (
    <section id='skils'>
      <motion.div variants={textVariant()} className='mb-5'>
        <p className={`${styles.sectionSubText} text-center`}>{t('skils.subTitle')}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t('skils.title')}</h2>
      </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies?.map((item) => (
        <div className='w-28 h-28 flex items-center justify-center flex-col gap-3' key={item.name} >
          <BallCanvas icon={item.icon} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>

        <Link to={'/skils'} className='w-full p-10 mt-10 flex items-center justify-center' >
        <button  className="learnMoreBtn learn-more">
        <span aria-hidden="true" className="circle">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">{t('showMore')}</span>
        </button>
        </Link>
    </section>
  );
};

export default SectionWrapper(Tech, "");