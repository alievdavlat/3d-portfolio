import React from "react";
import { useTranslation } from "react-i18next";





const LoginBtn = () => {

  const [t] = useTranslation();

  return (
     <button
      className="inline-block  custom-loginbt max-[420px}]:w-[70px] max-[420px]:p-[0px] rounded-[4px] bg-[#3d405b] border-none text-white text-center text-[17px] p-[10px] w-[200px] cursor-pointer m-4"
      style={{ transition: "all 0.5s" }}>
      <span className="cursor-pointer inline-block relative custom-span-css hover:pr-[15px]" style={{transition:'0.5s'}}>{t('loginbtn')}</span>
    </button>

  );
};

export default LoginBtn;
