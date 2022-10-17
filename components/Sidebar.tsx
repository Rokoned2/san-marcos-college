import React, { useState } from "react";

const Sidebar = () => {
  const [state, setState] = useState();

  return (
    <>
      <div className="w-[3.125rem] h-[3.125rem] bg-[#882622] fixed z-50 right-0 top-4 flex flex-col items-center justify-center">
        <div className="w-[1.5625rem] h-[0.3125rem] bg-white -translate-y-0.5"></div>
        <div className="w-[1.5625rem] h-[0.3125rem] bg-white "></div>
        <div className="w-[1.5625rem] h-[0.3125rem] bg-white translate-y-0.5"></div>
      </div>
      <div></div>
    </>
  );
};

export default Sidebar;
