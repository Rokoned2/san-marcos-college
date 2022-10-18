import React from "react";

const testimonios = [
  {
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Tania_Perez_Diaz_6bc3c16d29.png",
    content:
      "Estudié la carrera de Arte en el programa de pregrado y fue una experiencia gratificante. Los maestros son especialistas en las cátedras que imparten y existe una amplia cobertura del estudio del arte tanto universal como peruano en las áreas de pintura, escultura, música, teatro, danza, crítica de arte y arquitectura. Esta última fue de mi mayor interés y ahora sigo la línea de investigación en historia de la arquitectura virreinal. En el 2017 la universidad me dio la oportunidad de hacer una pasantía en la Universidad de Harvard, por ello y mi formación académica, estaré siempre agradecida con mi alma máter.",
    author: "Tania Pérez Diaz",
    facultad: "Facultad de Letras y Ciencias Humanas",
  },
  {
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Alan_Simon_Alvarado_Perez_7e785fd0bb.png",
    content:
      "Ingresar a San Marcos ha sido el reto más desafiante de mi vida y el logro de mayor satisfacción que he tenido. Pues su competitividad me exigió desde un principio disciplina y de un fuerte compromiso en prepararme continuamente para superar la gran brecha de conocimientos que me tenia alejado de mis proyectos profesionales. Estando ya en sus aulas entendí que debía esforzarme aún más para mantenerme en el camino, pero esto no hubiera sido posible sin en el apoyo incondicional de mis queridos compañeros, compañeras y apreciados maestros que desde el comienzo me motivaron a seguir adelante frente a los tropiezos o dudas que en el camino suelen aparecer. Aprendí que la universidad no es solo una etapa más por lo cual solo estamos de paso, sino que es un momento trascendental que te acompañará para toda la vida dándote las bases científicas, humanísticas y sobre todo de ética o responsabilidad social que uno debe demostrar en favor de su comunidad. Asimismo, San Marcos me han enseñado que frente a las carencias de recursos y la adversidad que pueda darse, nosotros siempre dispondremos de fuertes competencias y de la actitud para hacer frente a aquellas demandas que se presenten. Podría añadir más cosas, pero esto es lo más resaltó de San Marcos, su compromiso y calidad humana que tiene para con su gente, que día a día hace lo imposible para salir adelante. Si el tiempo retrocediera y hubiera nuevamente la oportunidad de escoger a San Marcos, no habría duda que volvería a apostar por ella. Porque San Marcos es el Perú, y el Perú será ahora y siempre San Marcos.",
    author: "Alan Simon Alvarado Perez",
    facultad: "Facultad de Psicología",
  },
  {
    image:
      "https://biologia-unmsm.s3.us-east-2.amazonaws.com/Giovanna_Vanessa_Cheel_Garibaldi_eeeabf0e35.png",
    content:
      "San Marcos me cambió la vida, no sólo aprendí mi carrera, sino también tolerancia, respeto por los demás, a valorar las diferencias y a no rendirme nunca. También conocí a muchos de los que son mis mejores amigos, quienes son un aporte importante de mi crecimiento como persona. Sin lugar a dudas, es un espacio de formación integral.",
    author: "Giovanna Vanessa Cheel Garibaldi",
    facultad: "Facultad de Ciencias Sociales",
  },
];

const TestimoniosSections = () => {
  return (
    <section className="bg-cover bg-center bg-repeat z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/fondo-testimonios-pagina-central.png')]">
      <div className="bg-auto bg-left bg-no-repeat z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/san-fernando-web-central-home-izquierda.png')]">
        <div className="bg-auto bg-right bg-no-repeat z-10 bg-[url('https://unmsm.edu.pe/img/backgrounds/san-fernando-web-central-home-derecha.png')]">
          <div className="bg-gradient-to-b from-white ">
            <div className="max-w-[31.875rem] md:max-w-[43.125rem] lg:max-w-[58.125rem] xl:max-w-[61.3125rem] mx-auto pt-10 md:pt-36 px-4 md:px-0">
              <div className="mb-28 text-center">
                <h2 className="text-[2rem] font-bold text-[#3a464f] pr-2">
                  La comunidad sanmarquina nos cuenta
                </h2>
                <p className="text-[#b0191c] hover:text-[#70191c] transition-colors cursor-pointer font-bold">
                  Ver más
                </p>
              </div>
              <div className="md:flex md:space-x-[1.5rem] space-y-14 md:space-y-0">
                {testimonios.map(
                  ({ image, content, author, facultad }, index) => (
                    <div
                      className="md:flex-1 relative cursor-pointer"
                      key={index}
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 -top-[4.8rem] w-[9.375rem] h-[9.375rem]	">
                        <img className="rounded-full " src={image} alt="" />
                      </div>
                      <div className="h-[21.625rem] bg-[#fff] px-[1.5625rem] pb-[1.875rem] pt-20">
                        <p className="line-clamp-[8] leading-[1.4rem]">
                          {content}
                        </p>
                        <p className="text-[#70191c] leading-[1.4rem] font-bold pt-3">
                          {author} | {facultad}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <img
            className="mx-auto pt-10"
            src="https://unmsm.edu.pe/img/backgrounds/fondo-en-numeros-central.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSections;
