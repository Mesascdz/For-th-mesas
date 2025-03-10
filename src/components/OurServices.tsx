// components/OurServices.tsx
import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  backgroundImage,
  title,
  description,
  link,
}) => {
  return (
    <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div>
          <p className="text-white text-opacity-90 mb-4">{description}</p>
          <Link
            href={link}
            className="inline-block !text-orange-500 hover:!text-orange-400 font-medium transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

const OurServices: React.FC = () => {
  const services = [
    {
      backgroundImage: "/1.jpg",
      title: "Business Consulting",
      description:
        "Expert guidance for trucking companies at any stage of development",
      link: "/services/business-consulting",
    },
    {
      backgroundImage: "/2.jpg",
      title: "Startup Support",
      description:
        "Complete assistance for new trucking businesses from formation to operation",
      link: "/services/startup-support",
    },
    {
      backgroundImage: "/3.jpg",
      title: "Dispatch Services",
      description: "Professional load planning and truck management solutions",
      link: "/services/dispatch-services",
    },
    {
      backgroundImage: "/4.jpg",
      title: "Compliance Solutions",
      description: "Stay compliant with DOT regulations and industry standards",
      link: "/services/compliance-solutions",
    },
    {
      backgroundImage: "/5.jpg",
      title: "Financial Services",
      description:
        "Accounting, bookkeeping, and financial management for trucking",
      link: "/services/financial-services",
    },
    {
      backgroundImage: "/6.jpg",
      title: "Driver Recruitment",
      description:
        "Find and hire qualified drivers for your trucking operation",
      link: "/services/driver-recruitment",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions for trucking businesses of all
            sizes, from startups to established companies looking to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              backgroundImage={service.backgroundImage}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-orange-500 hover:bg-orange-600 !text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
