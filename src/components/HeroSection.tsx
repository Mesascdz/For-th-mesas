// components/HeroSection.tsx
import React from "react";
import Link from "next/link";
import bgHero from "../../public/5.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[720px] bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgHero.src})`,
            filter: "brightness(0.7)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-16 md:pt-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">BUILT FOR YOU</h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-orange-500">SOLUTIONS</span> FOR YOUR
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            TRUCKLOAD <span className="text-orange-500">BUSINESS</span>
          </h2>

          <p className="text-lg mb-10">
            We are 100% trucking industry focused consultancy team offering
            full-scale solutions, time-tested expertise and support to startup
            trucking businesses, small and medium trucking companies, trucking
            entrepreneurs and investors interested in transportation industry.
          </p>

          <Link
            href="/services"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-md transition-colors"
          >
            LEARN MORE &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
