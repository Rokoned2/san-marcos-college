import React from "react";

interface Subtitle {
  subtitle: string;
  link: string;
}

interface FacultadItemProps {
  image: string;
  color: string;
  title: string;
  subtitles: Subtitle[];
  classNamePlus?: string;
}

const FacultadItem: React.FC<FacultadItemProps> = ({
  image,
  color,
  title,
  subtitles,
  classNamePlus,
}) => {
  return (
    <div
      className={`relative h-16 md:h-[8.75rem] lg:h-[11.875rem] xl:h-[14.17rem] overflow-hidden ${classNamePlus} w-full group`}
    >
      <img
        className="-top-9 md:top-0 absolute object-top w-full "
        src={image}
        alt=""
      />
      <div
        className={`h-full w-full absolute inset-2/4 -translate-x-1/2 -translate-y-1/2 bg-[${color}] opacity-60`}
      ></div>
      <p className="text-white text-[1.2rem] h-full w-full absolute inset-2/4 -translate-x-1/2 -translate-y-1/2 md:group-hover:translate-y-24 duration-300 lg:text-2xl flex items-center justify-center text-center px-[4rem]">
        {title}
      </p>
      <div className="h-full w-full opacity-0 text-white text-xs lg:text-sm absolute inset-2/4 -translate-y-1/2 -translate-x-1/2 duration-300 md:group-hover:opacity-100 flex flex-col items-center justify-center text-center px-2 md:space-y-2 lg:space-y-3">
        {subtitles.map(({ subtitle, link }, index) => (
          <a
            key={index}
            className="pointer-events-none md:group-hover:pointer-events-auto"
            href={link}
            target="_blank"
          >
            {subtitle}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FacultadItem;
