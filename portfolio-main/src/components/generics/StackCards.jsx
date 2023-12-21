import React from "react";

const StackCards = ({ title, icon }) => {
  return (
    <div className="group max-xs:w-[100px]  duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6  hover:translate-y-12">
      <div className="group-hover:duration-400  relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
        {/* <span className="text-5xl font-bold">{}</span> */}
        <img
          src={icon}
          Name="w-[60px]  mb-4 h-[60px] object-cover"
          alt={title}
        />
        <p className="text-amber-300 font-thin uppercase text-[18px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StackCards;
