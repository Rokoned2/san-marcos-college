import React from "react";

const PrincipalSection = () => {
  return (
    <section className="min-h-screen relative h-screen hidden md:block text-white">
      <video
        src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/video-backgrounds/video-bg-3.mp4"
        muted
        loop
        autoPlay
        className="w-full fixed object-cover left-0 top-0 -z-10"
      ></video>
      <img
        className="absolute left-1/2 top-60 -translate-x-1/2 -translate-y-1/2 "
        src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/logo_unmsm_web_central_6ba7dbe312.png"
        alt=""
      />
      <div className="flex justify-center absolute left-1/2 bottom-6 -translate-x-1/2 text-center  md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full">
        <div className="px-[15px] w-1/6">
          <img
            className="mx-auto h-16	"
            src="https://unmsm.edu.pe/img/iconos/estadisticas/estadisticas-investigadores-pagina-web-unmsm.svg"
            alt=""
          />
          <h2 className="text-xl">2, 212</h2>
          <p className="text-sm">Docentes investigadores</p>
        </div>
        <div className="px-[15px] w-1/6">
          <img
            className="mx-auto h-16	"
            src="https://unmsm.edu.pe/img/iconos/estadisticas/estadisticas-ranking-pagina-web-unmsm.svg"
            alt=""
          />
          <h2 className="text-xl">1° PUESTO</h2>
          <p className="text-sm">a nivel nacional, según Webometrics</p>
        </div>
        <div className="px-[15px] w-1/6">
          <img
            className="mx-auto h-16	"
            src="https://unmsm.edu.pe/img/iconos/estadisticas/estadisticas-primer-puesto-pagina-web-unmsm.svg"
            alt=""
          />
          <h2 className="text-xl">1° PUESTO</h2>
          <p className="text-sm">en producción científica nacional</p>
        </div>
        <div className="px-[15px] w-1/6">
          <img
            className="mx-auto h-16 	"
            src="https://unmsm.edu.pe/img/iconos/estadisticas/estadisticas-carreras-pagina-web-unmsm.svg"
            alt=""
          />
          <h2 className="text-xl">66 CARRERAS</h2>
          <p className="text-sm">
            de pregrado, en cinco áreas del conocimiento
          </p>
        </div>
        <div className="px-[15px] w-1/6">
          <img
            className="mx-auto h-16	"
            src="https://unmsm.edu.pe/img/iconos/estadisticas/estadisticas-tesis-pagina-web-unmsm.svg"
            alt=""
          />
          <h2 className="text-xl">15, 158 TESIS</h2>
          <p className="text-sm">digitales en nuestro repositorio</p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
