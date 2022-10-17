import React, { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { IoPlaySharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const news = [
  {
    id: "1",
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Whats_App_Image_2022_09_27_at_5_11_23_PM_10ace9f8cb.jpeg",
    title:
      "¡TUSM cumple 76 años dedicado a ejercer una labor de formación y difusión de la cultura a través del arte escénico!",
    link: "https://www.youtube.com/watch?v=6rKMCyHsllw&feature=youtu.be",
  },
  {
    id: "2",
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Whats_App_Image_2022_09_26_at_12_58_10_PM_f30ec30262.jpeg ",
    title:
      "El equipo de Karate sanmarquino alzó la copa de campeón en el Campeonato Nacional Universitario de Karate organizado por la FEDUP",
    link: "https://www.youtube.com/watch?v=cJoHcsbPG8M&feature=youtu.be",
  },
  {
    id: "3",
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Whats_App_Image_2022_09_18_at_10_04_20_PM_53e9a8d2e7.jpeg",
    title:
      "Arqueólogos sanmarquinos del Proyecto Chicama descubren  barrio de artesanos de  élite moche que tendría una antiguedad de 600 a 800 años d.C.",
    link: "https://www.youtube.com/watch?v=yGVLFBVYCjg&feature=youtu.be",
  },
];

const regularNews = [
  {
    id: "1",
    title:
      "Estudiantes de Ingeniería Civil visitan terrenos donde se construirá nuevo terminal del Aeropuerto Jorge Chávez",
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Whats_App_Image_2022_09_26_at_5_06_56_PM_67fc1d6923.jpeg",
  },
  {
    id: "2",
    title:
      "Rectora Jeri Ramón a Medallistas de los Juegos Universitarios Open 2022:“Ustedes son el orgullo de San Marcos",
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Whats_App_Image_2022_09_21_at_2_24_20_PM_e8157867c5.jpeg",
  },
  {
    id: "3",
    title:
      "San Marcos fue sede del lanzamiento de la Red Euro-Sudamericana de Criminología en el Perú Proyecto Erasmus+ SuCCESS",
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Whats_App_Image_2022_09_21_at_10_51_55_AM_1291ac6e48.jpeg",
  },
];

const RTVSection = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <section className="bg-auto bg-center bg-repeat z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/fondo-noticias-y%20eventos-pagina-central.png')]">
      <section className=" bg-right	bg-no-repeat bg-[length:560px] z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/rtv-acuarela-fondo.png')]">
        <div className="max-w-[510px] md:max-w-[690px] lg:max-w-[930px] xl:max-w-[1110px] mx-auto pt-10 md:pt-36 px-4 md:px-0">
          <div className="mb-4">
            <h2 className="inline text-[2rem] font-bold text-[#3a464f] pr-2 leading-[1.2]">
              RTV - Radio y Televisión San Marcos
            </h2>
            <p className="inline text-[#b0191c] font-bold">Visitar canal</p>{" "}
            <HiExternalLink className="inline text-[#b0191c] mb-1.5" />
          </div>

          <div className="relative">
            <Swiper
              className="h-[26.875rem] mb-6"
              loop={true}
              navigation={{ prevEl, nextEl }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
            >
              {news.map(({ id, image, title, link }) => (
                <SwiperSlide className="h-full" key={id}>
                  <div className=" h-full relative ">
                    <img
                      className="object-cover object-center h-full w-full"
                      src={image}
                      alt=""
                    />
                    <div className="h-full w-full absolute inset-2/4 -translate-x-1/2 -translate-y-1/2 opacity-40 bg-black"></div>
                    <div className="h-full absolute top-0 z-10 px-[1.125rem] pb-10 pt-[3.75rem] flex flex-col md:pt-[2rem] md:px-[6.875rem] lg:pt-[7.875rem]">
                      <div>
                        <img
                          className="mb-5"
                          src="https://unmsm.edu.pe/img/logo-rtv.png"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col flex-1 lg:flex-row">
                        <div className="text-xl md:text-[2rem] md:leading-[2.875rem] font-bold italic text-white flex-1 lg:mr-5">
                          {title}
                        </div>
                        <button className="self-start font-bold text-[#9E1D1F] bg-white rounded-lg py-2 px-[1.2rem] md:self-end lg:mb-6">
                          <a href={link}>
                            <IoPlaySharp className="inline mr-1 mb-1" />
                            Ver video
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="absolute top-1/2 -left-4 z-20 bg-white rounded w-8 h-8 flex items-center justify-center drop-shadow-lg cursor-pointer"
              ref={(node) => setPrevEl(node)}
            >
              <IoIosArrowBack className="text-2xl text-[#b0191c] stroke-[20] stroke-[#b0191c]" />
            </div>
            <div
              className="absolute top-1/2 -right-4 z-20 bg-white rounded w-8 h-8 flex items-center justify-center drop-shadow-lg cursor-pointer"
              ref={(node) => setNextEl(node)}
            >
              <IoIosArrowForward className="text-2xl text-[#b0191c] stroke-[20]	stroke-[#b0191c]" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  xl:space-x-[3.3rem] space-y-4 md:space-y-0">
            {regularNews.map(({ id, title, image }) => (
              <div className="flex-1 h-[17.25rem] drop-shadow-md" key={id}>
                <div className="h-[188px]">
                  <img
                    className="object-cover object-center h-full w-full "
                    src={image}
                    alt=""
                  />
                </div>
                <div className="bg-white py-[0.9375rem] px-[2.1875rem]">
                  <p className="md:line-clamp-3 leading-[20px]">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default RTVSection;
