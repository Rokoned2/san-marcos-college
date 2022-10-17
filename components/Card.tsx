import React from "react";
import { TbClock } from "react-icons/tb";

interface CardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  classNamePlus?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  date,
  classNamePlus,
}) => {
  return (
    <div
      className={`h-[360px] bg-white flex-1 flex flex-col ${classNamePlus} drop-shadow-md`}
    >
      <img src={image} alt="" />
      <div className="px-4 py-4 flex flex-col flex-1">
        <div className="overflow-hidden text-ellipsis pb-6 ">
          <h3 className="font-semibold line-clamp-3 mb-4">{title}</h3>
          <p className="line-clamp-3 ">{description}</p>
        </div>
        <div className="mt-auto flex text-[#54626c] opacity-50 ">
          <TbClock className="inline-block mr-1.5" />
          <p className="inline-block text-xs leading-5 text-[#54626c] ">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
