import React from "react";
import FacultadItem from "./FacultadItem";

const FacultadesSection = () => {
  return (
    <section className="bg-auto bg-center bg-repeat z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/fondo-noticias-y%20eventos-pagina-central.png')]">
      <div className="max-w-[510px] md:max-w-[690px] lg:max-w-[930px] xl:max-w-[1110px] mx-auto pt-10 md:pt-36 px-4 md:px-0">
        <h2 className=" text-[2rem] font-bold text-[#3a464f] pr-2 mb-4 leading-[1.2] md:hidden">
          Facultades{" "}
          <img
            className="inline"
            src="https://unmsm.edu.pe/img/iconos/boton_vermas.png"
            alt=""
          />
        </h2>
        <div className="md:flex md:pb-5 lg:pb-2	md:space-x-2 items-center">
          <FacultadItem
            image="https://unmsm.edu.pe/img/facultades/ciencias-de-la-salud-home-unmsm.png"
            color="#71151B"
            title="Ciencias de la Salud"
            subtitles={[
              {
                subtitle: "Medicina",
                link: "https://medicina.unmsm.edu.pe/",
              },
              {
                subtitle: "Farmacia y Bioquímica",
                link: "https://farmacia.unmsm.edu.pe/",
              },
              {
                subtitle: "Medicina Veterinaria",
                link: "https://veterinaria.unmsm.edu.pe/",
              },
              {
                subtitle: "Odontología",
                link: "https://odontologia.unmsm.edu.pe/",
              },
              {
                subtitle: "Psicología",
                link: "https://psicologia.unmsm.edu.pe/",
              },
            ]}
            classNamePlus="flex-1 mb-2 md:mb-0"
          />
          <div className="hidden h-[8.75rem] md:flex md:flex-col flex-1 text-center justify-items-center items-center ">
            <div className="mb-4 lg:px-16">
              <h2 className="text-[2rem] font-bold text-[#3a464f] pr-2 leading-[1.2] pb-2">
                Facultades
              </h2>
              <p>
                Contamos con más de 60 carreras distribuidas en 20 facultades
              </p>
              <a
                className="text-[#b0191c] font-bold"
                href={"https://unmsm.edu.pe/formacion-academica/facultades"}
              >
                Ver más
              </a>
            </div>
          </div>
          <FacultadItem
            image="https://unmsm.edu.pe/img/facultades/ciencias-basicas-home-unmsm.png"
            color="#BBB651"
            title="Ciencias Básicas"
            subtitles={[
              {
                subtitle: "Ciencias Físicas",
                link: "https://fisica.unmsm.edu.pe/",
              },
              {
                subtitle: "Ciencias Matemáticas",
                link: "https://matematicas.unmsm.edu.pe/",
              },
              {
                subtitle: "Ciencias Biológicas",
                link: "https://biologia.unmsm.edu.pe/",
              },
              {
                subtitle: "Química e Ingeniería Química",
                link: "https://quimica.unmsm.edu.pe/",
              },
            ]}
            classNamePlus="flex-1 mb-2 md:mb-0"
          />
        </div>
        <div className="md:flex md:space-x-2">
          <FacultadItem
            image="https://unmsm.edu.pe/img/facultades/ingenierias-home-unmsm.png"
            color="#EC973A"
            title="Ingenierías"
            subtitles={[
              {
                subtitle:
                  "Ingeniería Geológica, Minera, Metalúrgica y Geográfica",
                link: "https://figmmg.unmsm.edu.pe/",
              },
              {
                subtitle: "Ingeniería Industrial",
                link: "https://industrial.unmsm.edu.pe/",
              },
              {
                subtitle: "Ingeniería de Sistemas e Informática",
                link: "https://sistemas.unmsm.edu.pe/site/index.php",
              },
              {
                subtitle: "Ingeniería Electrónica y Eléctrica",
                link: "https://fiee.unmsm.edu.pe/",
              },
              {
                subtitle: "Química e Ingeniería Química",
                link: "https://quimica.unmsm.edu.pe/",
              },
            ]}
            classNamePlus="flex-1 mb-2 md:mb-0"
          />
          <FacultadItem
            image="https://unmsm.edu.pe/img/facultades/ciencias-economicas-gestion-home-unmsm.png"
            color="#3A464F"
            title="Ciencias Económicas y de la Gestión"
            subtitles={[
              {
                subtitle: "Ciencias Administrativas",
                link: "https://administracion.unmsm.edu.pe/",
              },
              {
                subtitle: "Ciencias Contables",
                link: "https://contabilidad.unmsm.edu.pe/",
              },
              {
                subtitle: "Ciencias Económicas",
                link: "https://economia.unmsm.edu.pe/",
              },
            ]}
            classNamePlus="flex-1 mb-2 md:mb-0"
          />
          <FacultadItem
            image="https://unmsm.edu.pe/img/facultades/letras-humanidades-home-unmsm.png"
            color="#A3371C"
            title="Humanidades y Ciencias Jurídicas y Sociales"
            subtitles={[
              {
                subtitle: "Ciencias Sociales",
                link: "https://csociales.unmsm.edu.pe/",
              },
              {
                subtitle: "Derecho y Ciencia Política",
                link: "https://derecho2.unmsm.edu.pe/",
              },
              {
                subtitle: "Letras y Ciencias Humanas",
                link: "https://letras.unmsm.edu.pe/",
              },
              {
                subtitle: "Educación",
                link: "https://educacion.unmsm.edu.pe/",
              },
            ]}
            classNamePlus="flex-1 mb-2 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default FacultadesSection;
