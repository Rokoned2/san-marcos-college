import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FacultadesSection from "../components/FacultadesSection";
import NewsSection from "../components/NewsSection";
import PostsSection from "../components/PostsSection";
import PrincipalSection from "../components/PrincipalSection";
import RecentPubsSection from "../components/RecentPubsSection";
import RTVSection from "../components/RTVSection";
import Sidebar from "../components/Sidebar";
import TestimoniosSections from "../components/TestimoniosSections";

const Home: NextPage = () => {
  return (
    <div className="text-[#54626c] font-lato">
      <Head>
        <title>UNMSM</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Sidebar />
      <PrincipalSection />
      <NewsSection />
      <RTVSection />
      <div className="bg-[#F2F2F2] pt-16 w-full md:pb-10">
        <img
          className="mx-auto object-cover h-[123px]"
          src="https://unmsm.edu.pe/img/backgrounds/separacion.png"
          alt=""
        />
      </div>
      <FacultadesSection />
      <RecentPubsSection />
      <PostsSection />
      <TestimoniosSections />
      <img
        src="https://unmsm.edu.pe/img/backgrounds/fondo-final-pagina-central.png"
        className="w-full bg-white pt-10"
        alt=""
      />
    </div>
  );
};

export default Home;
