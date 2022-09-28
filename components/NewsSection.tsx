import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TbClock } from "react-icons/tb";
import InfoSlide from "./InfoSlide";
import Card from "./Card";
import Events from "./Events";

const NewsSection = () => {
  const mainNews = [
    {
      id: "0",
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/premiacion_juegos_florales_administracion_c8ac3a7b3d.png",
      title:
        "Más de un centenar de estudiantes participaron en los primeros Juegos Florales de Ciencias Administrativas",
      description:
        "La Facultad de Ciencias Administrativas (FCA) premió a los ganadores de los primeros Juegos Florales FCA “Elizabeth Canales Aybar”, que tuvieron más de cien participantes, entre sus tres escuelas profesionales, superando las expectativas de los organizadores.",
      date: "24 de Setiembre de 2022",
    },
    {
      id: "1",
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/sanmarquina_nominada_conservacion_f7a76eced0.png",
      title:
        "¡Buena noticia! Sanmarquina es nominada al premio mundial más importante de conservación de fauna silvestre",
      description:
        "Fanny Cornejo, egresada de la Facultad de Ciencias Biológicas, es una de las diez conservacionistas finalistas del Emerging Conservationist Award, los reconocimientos más importantes del mundo para la conservación de fauna silvestre, otorgado por la organización Indianapolis Prize.",
      date: "23 de Setiembre de 2022",
    },
    {
      id: "2",
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/DSC_2308_4_5c8a6933aa.jpg",
      title:
        "San Marcos conmemora bicentenario de instalación del primer Congreso Constituyente del Perú",
      description:
        "Autoridades, estudiantes, docentes y trabajadores de la Universidad Nacional Mayor de San Marcos (UNMSM) participaron en el acto cultural que conmemora los 200 años de la instalación del primer Congreso Constituyente del Perú, promovida por el libertador José de San Martín y los ilustres sanmarquinos Toribio Rodríguez de Mendoza, José Faustino Sánchez Carrión y Francisco Javier Mariátegui, presidente y secretarios de las juntas preparatorias, respectivamente.",
      date: "22 de Setiembre de 2022",
    },
    {
      id: "3",
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/rectora_san_marcos_bicentenario_5098fd550f.png",
      title:
        "Incorporan a la rectora de la UNMSM, Jeri Ramón, como miembro de la Asociación Bicentenario 2021",
      description:
        "La rectora de la Universidad Nacional Mayor de San Marcos (UNMSM), doctora Jeri Ramón Ruffner, fue incorporada como nuevo miembro permanente de la Asociación Bicentenario 2021 en mérito a su reconocida trayectoria profesional y académica.",
      date: "22 de Setiembre de 2022",
    },
  ];

  const regularNews = [
    {
      id: "1",
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/thumbnail_nueva_especie_conejo_416fe7cdd0.png",
      title:
        "Biólogos de San Marcos confirman la presencia de nueva especie de escarabajo en el Perú",
      description:
        "En una reciente publicación se ha dado a conocer la descripción de una nueva especie de escarabajo, que ha recibido el nombre de Microogenius cashivari Figueroa & Paz sp. nov., descubierta en el departamento de Pasco y, probablemente, endémica de esta área. ",
      date: "26 de Setiembre de 2022",
    },
    {
      id: "2",
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/thumbnail_yanavico_habita_estudio_mhn_456fbb4438.png",
      title:
        "Estudio revela cambios en la distribución geográfica del yanavico en Perú",
      description:
        "En una reciente investigación publicada en la Revista Peruana de Biología, biólogos estudiaron la distribución y abundancia del ibis de la puna o yanavico, Plegadis ridgwayi, encontrando que sus poblaciones se han desplazado hacia el norte y la costa peruana debido al deterioro de su hábitat andino y que son más abundantes en Perú y Bolivia.",
      date: "26 de Setiembre de 2022",
    },
    {
      id: "3",
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/thumbnail_estudiantes_sanmarquinos_concurso_investigacion_91f64db168.png",
      title:
        "Estudiantes sanmarquinos participarán en primer concurso de proyectos científicos de la UNMSM",
      description:
        "Incentivar y promover las actividades de investigación de los estudiantes, es el principal objetivo del I Concurso de Proyectos de Ciencia, Tecnología, Innovación y Emprendimiento (PRO-CTIE) de la Universidad Nacional Mayor de San Marcos (UNMSM).",
      date: "23 de Setiembre de 2022",
    },
  ];

  return (
    <section className="bg-auto bg-center bg-repeat z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/fondo-noticias-y%20eventos-pagina-central.png')]">
      <section className=" bg-right	bg-no-repeat bg-[length:560px] z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/plazuela-iglesia-san-carlos-pagina-central-unmsm.png')]">
        <div className="max-w-[510px] md:max-w-[690px] lg:max-w-[930px] xl:max-w-[1110px] mx-auto pt-11 px-4 md:px-0">
          <div className="mb-5">
            <h2 className="inline text-[2rem] font-bold text-[#3a464f] pr-2">
              Noticias
            </h2>
            <p className="inline text-[#b0191c] font-bold">Ver más</p>
          </div>
          <Swiper className="  md:h-[22.9rem] mb-6" loop={true}>
            {mainNews.map(({ image, title, description, date }) => (
              <SwiperSlide className="md:flex ">
                <div className=" h-full relative md:w-3/5">
                  <img className="h-full object-cover" src={image} alt="" />
                </div>
                <div className="md:w-2/5 flex flex-col pt-6 pb-5 pl-4 pr-5 bg-white">
                  <span className="self-start	border-[1px] px-[7px] mb-5 rounded border-[#3a464f] text-[13px] text-[#3a464f] font-bold">
                    Destacado
                  </span>
                  <h3 className="font-bold mb-5 md:line-clamp-4">{title}</h3>
                  <p className="line-clamp-[7] md:line-clamp-5 lg:line-clamp-[6] xl:line-clamp-[7]">
                    {description}
                  </p>
                  <div className="mt-auto flex text-[#54626c] opacity-50">
                    <TbClock className="inline-block mr-1.5" />
                    <p className="inline-block text-xs leading-5	text-[#54626c]">
                      {date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col md:flex-row ">
            <div className="flex space-x-6 md:w-3/5 ">
              {regularNews.map(({ id, image, title, description, date }) => (
                <Card
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                  date={date}
                  classNamePlus="last:hidden lg:last:block"
                />
              ))}
            </div>
            <Events />
          </div>
        </div>
      </section>
    </section>
  );
};

export default NewsSection;
