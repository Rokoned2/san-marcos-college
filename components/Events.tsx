import moment from "moment";
import React from "react";

const Events = () => {
  const events = [
    {
      startDate: moment("23/08/2022", "DD/MM/YYYY", true),
      endDate: moment("30/09/2022", "DD/MM/YYYY", true),
      title: "CONVOCATORIA DE TRABAJOS FINALES: Revista Espiral",
      place: "Virtual",
    },
    {
      startDate: moment("01/09/2022", "DD/MM/YYYY", true),
      endDate: moment("27/09/2022", "DD/MM/YYYY", true),
      title: "Preparación para el examen de ascenso y nombramiento 2022",
      place: "Virtual",
    },
    {
      startDate: moment("02/09/2022", "DD/MM/YYYY", true),
      endDate: moment("03/10/2022", "DD/MM/YYYY", true),
      title: "BECAS DE LIDERAZGO PARA JÓVENES INDÍGENAS Y AFROPERUANAS",
      place: "Virtual",
    },
    {
      startDate: moment("03/09/2022", "DD/MM/YYYY", true),
      endDate: moment("01/10/2022", "DD/MM/YYYY", true),
      title: "Gestión y Análisis de Datos con Excel",
      place: "Virtual",
    },
    {
      startDate: moment("03/09/2022", "DD/MM/YYYY", true),
      endDate: moment("28/09/2022", "DD/MM/YYYY", true),
      title: "FUNCIONES TEATRALES EN SETIEMBRE",
      place: "CCSM",
    },
    {
      startDate: moment("28/09/2022", "DD/MM/YYYY", true),
      endDate: moment("26/10/2022", "DD/MM/YYYY", true),
      title:
        "Programa Especializado: Asuntos regulatorios de productos farmacéuticos",
      place: "Zoom",
    },
    {
      startDate: moment("04/10/2022", "DD/MM/YYYY", true),
      endDate: moment("22/10/2022", "DD/MM/YYYY", true),
      title:
        "Programa de autorización de un establecimiento farmacéutico y su cumplimiento en buenas prácticas",
      place: "Meet",
    },
  ];

  return (
    <div className=" h-[22.5rem] flex flex-col md:w-2/5 mt-8 md:pl-6 md:mt-0">
      <div className="mb-5">
        <h2 className="inline text-[2rem] font-bold text-[#3a464f] pr-2">
          Eventos
        </h2>
        <p className="inline text-[#b0191c] font-bold">Ver más</p>
      </div>
      <div className="bg-white pt-[0.8rem] px-5 pb-5 flex-1 overflow-scroll">
        {events.map(({ startDate, endDate, title, place }, index) => (
          <div className="flex mb-[15px]" key={index}>
            <div className="w-[2.8125rem] h-[2.8125rem] mt-[0.4rem] bg-[#3a464f] text-white flex flex-col text-center items-center justify-center shrink-0	">
              <span className="font-bold text-xl leading-4	">
                {startDate.format("D")}
              </span>
              <span className="text-sm font-bold leading-4	">
                {startDate.format("MMM").toLowerCase()}.
              </span>
            </div>
            <div className="ml-5">
              <div className="font-semibold">{title}</div>
              <p className="text-sm">
                {startDate.format("D MMM").toLowerCase()}. al{" "}
                {endDate.format("D MMM").toLowerCase()}. | {place}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
