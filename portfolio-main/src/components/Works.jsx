import React, { useTransition } from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Pagination from "./generics/Pagination";
import { projects } from "../constants";
import ProjectCard from "./generics/ProjectCard";
import { useTranslation } from "react-i18next";


const renderData = (data) => {
  return (
    <div className="mt-20 max-[420px]:w-full  flex flex-wrap gap-7">
        {
          data?.map(( project , index) => (
            <ProjectCard  key={`project-${index}`} {...project} index={index} />
          ))
        }
      </div>
  );
};



const Works = () => {
const [data , setData ] = React.useState([])
const [t] = useTranslation()


React.useEffect(() => {
   
  setData(projects)
}, []);





  return (
    <section id="projects">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t('projects.subTitle')}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t('projects.title')}</h2>
      </motion.div>

      <div className="flex w-full items-center justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-center  text-[17px] max-w-3xl leading-[30px]">
          {t('projects.descr')}
        </motion.p>
      </div>

        <Pagination btnTitle={t('showMore')} renderData={renderData} data={data}/>
      
      
    </section>
  );
};

export default SectionWrapper(Works, "");
