import React from "react";

const ToggleNav = ({ children, isOpenToggleSide }) => {
  return (
    <div
      className={`${
        isOpenToggleSide ? "right-[0]" : "right-[-400px] "
      }  w-[300px] custom-side h-screen fixed bg-tertiary z-40 transition-all py-10 max-xs:w-250px flex flex-col justify-between`}>
      {children}
    </div>
  );
};

export default ToggleNav;
