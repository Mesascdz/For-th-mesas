// pages/index.tsx (updated)
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import CoreCompetencies from "@/components/CoreCompetencies";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TruckStaff - Solutions for Your Truckload Business</title>
        <meta
          name="description"
          content="Trucking industry focused consultancy offering full-scale solutions and support to trucking businesses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <OurServices />
      <CoreCompetencies />

      {/* Other sections will be added here */}
    </div>
  );
};

export default Home;
