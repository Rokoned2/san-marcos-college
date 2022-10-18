import "swiper/css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Parallax } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const recentPublications = [
  {
    image:
      "https://luiscavibotsample.s3-sa-east-1.amazonaws.com/assets/investigacion/publicaciones-recientes/escritos_selectos_sobre_direccion_cientifica_en_organizaciones_complejas.webp",
    type: "Libro",
    title:
      "Escritos selectos sobre dirección científica en organizaciones complejas. Weltanschauung y paradigmas en administración de organizaciones.",
    author:
      "Adolfo Oswaldo Acevedo Borrego, Martha Carolina Linares Barrantes y Orestes Cachay Boza",
    year: "2019",
  },
  {
    image:
      "https://luiscavibotsample.s3-sa-east-1.amazonaws.com/assets/investigacion/publicaciones-recientes/sociedad_y_politica_1972_1983_edicion_facsimilar_anibal_quijano.webp",
    type: "Libro",
    title: "«Sociedad y Política» (1972-1983). Edición facsimilar",
    author: "Aníbal Quijano (dir.)",
    year: "2019",
  },
  {
    image:
      "https://luiscavibotsample.s3-sa-east-1.amazonaws.com/assets/investigacion/publicaciones-recientes/el_proyecto_urbano_moderno_de_las_company_towns_edith_aranda_dioses.webp",
    type: "Libro",
    title:
      "El proyecto urbano moderno de las company towns en el Perú. La Oroya y Talara, 1940-1970",
    author: "Edith Aranda Dioses",
    year: "2019",
  },
  {
    image:
      "https://luiscavibotsample.s3-sa-east-1.amazonaws.com/assets/investigacion/publicaciones-recientes/protestantismo_y_poder_tomas_gutierrez_sanchez.webp",
    type: "Libro",
    title:
      "Protestantismo y poder. Acción política de los evangélicos en América Latina",
    author: "Tomás Gutiérrez Sánchez",
    year: "2019",
  },
  {
    image:
      "https://luiscavibotsample.s3-sa-east-1.amazonaws.com/assets/investigacion/publicaciones-recientes/un_retrato_de_bolivar_omar_gonzalo_esquivel_ortiz.webp",
    type: "Libro",
    title:
      "Un retrato de Bolívar. Estudio introductorio a la obra de Pablo Roxas",
    author: "Omar Gonzalo Esquivel Ortiz",
    year: "2020",
  },
  {
    image:
      "https://luiscavibotsample.s3-sa-east-1.amazonaws.com/assets/investigacion/publicaciones-recientes/para_una_critica_de_la_democracia_en_america_latina_nicolas_lynch.webp",
    type: "Libro",
    title: "Para una crítica de la democracia en América Latina",
    author:
      "Asociación Nacional de Familiares de Secuestrados, Detenidos y Desaparecidos del Perú (ANFASEP)",
    year: "2020",
  },
];

const RecentPubsSection = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <section className=" bg-right	bg-no-repeat bg-[length:560px] z-10 bg-[#fff]">
      <div className="max-w-[510px] md:max-w-[690px] lg:max-w-[930px] xl:max-w-[1110px] mx-auto md:pt-32 px-4 md:px-0">
        <div className="mb-5 md:mb-16">
          <h2 className="inline text-[2rem] font-bold text-[#3a464f] pr-2">
            Publicaciones recientes
          </h2>
          <p className="inline text-[#b0191c] hover:text-[#70191c] transition-colors cursor-pointer font-bold">
            Ver más
          </p>
        </div>
        <div className="relative">
          <Swiper
            className="md:h-[16.625rem] !pb-4 !pr-4"
            loop={true}
            navigation={{ prevEl, nextEl }}
            speed={2000}
            parallax={true}
            slidesPerView={3}
            spaceBetween={20}
            modules={[Autoplay, Navigation, Parallax]}
          >
            {recentPublications.map(
              ({ image, type, title, author, year }, index) => (
                <SwiperSlide
                  className="h-[15.625rem] text-[0.9375rem] flex items-center justify-items-center"
                  key={index}
                >
                  <div className="flex h-[15.625rem] drop-shadow-xl hover:text-[#70191c] cursor-pointer">
                    <div className="h-[15.625rem] flex-1">
                      <img className="h-full w-full" src={image} alt="" />
                    </div>
                    <div className="flex flex-col flex-1 px-2 py-6 bg-white">
                      <div className="flex-1">
                        <p className="font-bold pb-1">{type}</p>
                        <p className="font-bold leading-[1.05rem] line-clamp-6">
                          {title}
                        </p>
                      </div>
                      <p className="line-clamp-2 leading-[1.05rem]">{author}</p>
                      <p>{year}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
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
      </div>
    </section>
  );
};

export default RecentPubsSection;
