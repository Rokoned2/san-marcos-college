import React from "react";

const PostsSection = () => {
  const posts = [
    {
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/dibujo_f9cb16bc31.png",
      title: "Dibujo y pintura artística de retrato y figura humana",
      description: "",
    },
    {
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/curso_redaccion_16c00f157a.png",
      title:
        "Taller de Redacción de artículos científicos en Revistas Indexadas",
      description:
        "Taller de Redacción de Artículos Científicos en Revistas Indexadas, organizado por el Instituto de Investigación y CERSEU de la Facultad de Ingeniería Geológica, Minera, Metalúrgica y Geográfica, dirigido a los docentes de Pre y Posgrado de la Facultad.",
    },
    {
      image:
        "https://biologia-unmsm.s3.us-east-2.amazonaws.com/curso_autoliderazgo_16b39101f2.png",
      title: "Autoliderazgo e Influencia Procesando en el Presente",
      description: "El liderazgo y su influencia en los trabajadores de UNMSM.",
    },
  ];

  return (
    <section className="bg-auto bg-center bg-repeat z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/fondo-educacion-continua-pagina-central.png')]">
      <div className="max-w-[31.875rem] md:max-w-[43.125rem] lg:max-w-[55rem] mx-auto pt-10 md:pt-36 px-4 md:px-0">
        <div className="mb-3 text-center">
          <h2 className="inline text-[2rem] font-bold text-[#3a464f] pr-2">
            Educación continua
          </h2>
          <p className="inline text-[#b0191c] font-bold">Ver más</p>
        </div>
        <div className="md:flex space-y-[2.125rem] md:space-y-0 md:space-x-[2.125rem]">
          {posts.map(({ image, title, description }, index) => (
            <div className="flex-1 md:h-[22.5rem] flex flex-col" key={index}>
              <div className="h-44">
                <img
                  className="object-cover object-center w-full h-full"
                  src={image}
                  alt=""
                />
              </div>
              <div className="p-4 bg-[#fff] drop-shadow-lg flex-1">
                <h3 className="font-bold leading-[1.375rem] pb-3">{title}</h3>
                <p className="md:line-clamp-3 lg:line-clamp-4  leading-[1.375rem]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
