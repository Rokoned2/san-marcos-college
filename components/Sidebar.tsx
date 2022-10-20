import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { TbBook } from "react-icons/tb";

const Sidebar = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 37) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener("scroll", setFixed);
    return () => {
      document.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <>
      <div className="md:hidden w-[3.125rem] h-[3.125rem] bg-[#882622] fixed z-50 right-0 top-4 flex flex-col items-center justify-center cursor-pointer">
        <div className="w-[1.5625rem] h-[0.3125rem] bg-white -translate-y-0.5"></div>
        <div className="w-[1.5625rem] h-[0.3125rem] bg-white "></div>
        <div className="w-[1.5625rem] h-[0.3125rem] bg-white translate-y-0.5"></div>
      </div>
      <div
        className={`hidden md:block  text-white fixed top-24 z-50 text-[1.1rem] space-y-[0.6rem]  `}
      >
        <div
          className={`flex items-center w-[12.5rem] bg-[#b51222d9] pl-[1.1rem] py-3 cursor-pointer duration-300 transition-[width]
        ${fix ? "w-[3.8125rem] hover:w-20" : "hover:w-[13.4375rem]"}
        `}
        >
          <BiMenu className="text-[1.6rem] w-[1.6rem] " />
          <p
            className={`${
              fix
                ? "opacity-0 transition-opacity duration-200 pointer-events-none "
                : ""
            } w-0 ml-5`}
          >
            Menú
          </p>
        </div>
        <div
          className={`flex items-center w-[12.5rem]  bg-[#b51222d9] pl-[1.1rem] py-3 cursor-pointer duration-300 transition-[width]
        ${fix ? "w-[3.8125rem] hover:w-20" : "hover:w-[13.4375rem]"}
        `}
        >
          <FaRegUser className="w-[1.6rem]" />
          <p
            className={`${
              fix
                ? "opacity-0 transition-opacity duration-200 pointer-events-none"
                : ""
            } w-0 ml-5`}
          >
            Intranet
          </p>
        </div>
        <div
          className={`flex items-center w-[12.5rem]  bg-[#b51222d9] pl-[1.1rem] py-3 cursor-pointer duration-300 transition-[width]
        ${fix ? "w-[3.8125rem] hover:w-20" : "hover:w-[13.4375rem]"}
        `}
        >
          <TbBook className="text-[1.4375rem] w-[1.6rem]" />
          <p
            className={`${
              fix
                ? "opacity-0 transition-opacity duration-200 pointer-events-none"
                : ""
            } w-0 ml-5`}
          >
            Repositorios
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
