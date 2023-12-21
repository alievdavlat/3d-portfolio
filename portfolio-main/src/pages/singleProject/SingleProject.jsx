import React from "react";
import { StarsCanvas } from "../../components";
import { useSelector } from "react-redux";

const SingleProject = () => {

  const{projectItem} = useSelector(state => state.pages)

  console.log(projectItem, 'singledan');

  return (

    <>

    <div className="flex relative  gap-20 z-0 w-screen bg-primary flex-col p-16  max-xs:p-0 max-xs:gap-20 ">
      <div className="flex items-center max-xs:h-full max-xs:flex-col flex-row justify-between w-screen">
       
        <div className="w-[1200px]  max-xs:w-full max-xs:p-5 h-[800px] max-xs:h-[300px]">
          <iframe
           className="w-[1200px] max-xs:w-full rounded-sm h-full"
            src="https://www.youtube.com/embed/p8Sl-79s9SI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        
        <div className="px-16 py-10 gap-20 max-xs:px-5 max-xs:gap-10 flex justify-around flex-col">
          <h3 className="text-[30px] font-semibold">{projectItem?.name}</h3>
          <h5>{projectItem?.stack}</h5>
          <p className="pr-10 leading-10 text-[14px]">
           {projectItem.description}
          </p>


          <div className="flex  flex-row max-xs:flex-col gap-12">
            <a className="cursor-pointer" href={projectItem?.soucre_code_link}>github link</a>
            <a className="cursor-pointer"  href={projectItem?.iframe}>wibsite link</a>
          </div>

        </div>

      </div>

      <StarsCanvas/>


      <div className="flex flex-col gap-10">
      <h4 className="text-[24px] max-xs:text-[16px] max-xs:mx-auto  font-bold">Technologies used in Project</h4>
      <div className=" flex w-full flex-row max-xs:p-4  gap-10 flex-wrap">
        {
          projectItem?.tags?.map((item, index) => (
            <span className={`text-[17px] ${item.color}`}>#{item.name}</span>
          ))
        }
      </div>
      </div>
    </div>
    </>

  );
};

export default SingleProject;
