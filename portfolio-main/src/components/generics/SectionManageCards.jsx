import React from "react";
import { hideSections } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addSectionSecttings,
  hideTestimonials,
  hideWorkExp,
} from "../../redux/sectionsSlice";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import {  setItemToStorage } from "../../hooks/useStorage";



const SectionManageCards = () => {
  const { testimonials, workExp } = useSelector((state) => state.sections);

  const dispatch = useDispatch();

  const handleCheckbox = (key, index) => {
    if (key == "testimonials") {
      setItemToStorage("testimonials", !testimonials);

      const newHIdeSctions = hideSections.map((item, id) =>
        id == index ? { ...item, status: !item.status } : item
      );
      dispatch(addSectionSecttings(newHIdeSctions));
      console.log(newHIdeSctions);

      dispatch(hideTestimonials(!testimonials));
    }

    if (key == "Experience") {
      setItemToStorage("experience", !workExp);

      const newHIdeSctions = hideSections.map((item, id) =>
        id == index ? { ...item, status: !item.status } : item
      );
      dispatch(addSectionSecttings(newHIdeSctions));
      console.log(newHIdeSctions);
      dispatch(hideWorkExp(!workExp));
    }
  };

  return (
    <>
      {hideSections.map((item, index) => (
        <Tilt key={item.id} className="xs:w-[250px] cursor-pointer  w-full">
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              onClick={() => handleCheckbox(item.title, index)}
              className={`rounded-[20px] bg-tertiary  py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}>
              <h3 className="text-white text-[20px] font-bold text-center">
                {item.title}
                <div>
                  {item.title == "testimonials" && testimonials ? (
                    <span className="text-green-500">show</span>
                  ) : item.title == "Experience" && workExp ? (
                    <span className="text-green-500">show</span>
                  ) : (
                    <span className="text-red-600">hide</span>
                  )}
                </div>
              </h3>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </>
  );
};

export default SectionManageCards;
