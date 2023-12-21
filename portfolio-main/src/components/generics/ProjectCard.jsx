
import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../../assets";
import { fadeIn } from "../../utils/motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProjectItem } from "../../redux/pagesSlice";


const ProjectCard = ({index,name , description , tags , image, soucre_code_link }) => {

  const dispatch = useDispatch()

  const handleClik = () => {
        dispatch(setProjectItem({name, description, tags, image, soucre_code_link}))
  }

  return (
    <section id="work">
      <Link to={'/singleproject'}  onClick={() => handleClik()}>
    <motion.div variants={fadeIn('up', 'spring',  index * 0.5, 0.75)}> 
      <Tilt
        options={{
          max:45, 
          scale:1,
          speed:450
        }}
        className='bg-tertiary cursor-pointer p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>

          <div className="absolute inset-0 flex justify-end card-img_hover">

            <div
            title="socure code"
            onClick={() => window.open(soucre_code_link, '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            > 
                <img src={github} alt={'github'}  className="w-1/2 h-1/2 object-contain"/>
            </div>
          
          </div>
        
        </div>


          <div className="mt-5">
            <h3 className="text-white mb-3 font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            { tags.map( ( tag, index ) => (
              <p 
              key={tag.name}
              className={`${tag.color}`}

              >
                #{tag.name}
              </p>
            ))}
          </div>
          <span className={`mt-4 text-[14px]`}>Show Project </span> <i class='bx bxs-hand-up'></i>
      </Tilt>
    </motion.div>
      </Link>

    </section>
  )
}


export default ProjectCard
