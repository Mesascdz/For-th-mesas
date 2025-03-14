// components/CompanyInfo.tsx
import React from "react";
import { ExternalLink, Instagram, Youtube, Send } from "lucide-react";

interface CompanyData {
  id: number;
  name: string;
  salary: string;
  level: string;
  workType: string;
  timeRange: string;
  description?: string;
  phone: string;
  imageSrc?: string;
}

interface CompanyInfoProps {
  type: "buy" | "sell";
}

export default function CompanyInfo({ type }: CompanyInfoProps) {
  // Sample data for companies
  const buyCompanies: CompanyData[] = [
    {
      id: 1,
      name: "UIC Group Kompaniy",
      salary: "$500+",
      level: "Middle",
      workType: "Online",
      timeRange: "10:00 - 20:00",
      phone: "+94 099 4001",
      imageSrc: "/next.svg", // Add your image path here
    },
    {
      id: 2,
      name: "UIC Group Kompaniy",
      salary: "$500+",
      level: "Middle",
      workType: "Online",
      timeRange: "10:00 - 20:00",
      description:
        "Bu Programma Dasturi Juda Yaxshi Bajarilgan Bo'lib Bu Kompaniya Juda Ko'p Mijozlarga Ega Bo'lgan. Programma Dasturlash Kompaniyasi Bu Programma Yordamida Ko'p Foydalanuvchilar Ehtiyojlari Qondiriladi.",
      phone: "+94 099 4001",
      imageSrc: "/next.svg", // Add your image path here
    },
  ];

  const sellCompanies: CompanyData[] = [
    {
      id: 3,
      name: "UIC Group Kompaniy",
      salary: "$500+",
      level: "Middle",
      workType: "Online",
      timeRange: "10:00 - 20:00",
      phone: "+94 099 4001",
      imageSrc: "/next.svg", // Add your image path here
    },
    {
      id: 4,
      name: "UIC Group Kompaniy",
      salary: "$500+",
      level: "Middle",
      workType: "Online",
      timeRange: "10:00 - 20:00",
      description:
        "Bu Programma Dasturi Juda Yaxshi Bajarilgan Bo'lib Bu Kompaniya Juda Ko'p Mijozlarga Ega Bo'lgan. Programma Dasturlash Kompaniyasi Bu Programma Yordamida Ko'p Foydalanuvchilar Ehtiyojlari Qondiriladi.",
      phone: "+94 099 4001",
      imageSrc: "/next.svg", // Add your image path here
    },
  ];

  const companies = type === "buy" ? buyCompanies : sellCompanies;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {type === "buy"
              ? "Companies Selling Digital Assets"
              : "Companies Buying Digital Assets"}
          </h2>
        </div>

        <div className="space-y-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Company Image */}
                <div className="w-full md:w-1/3 p-6 flex items-center justify-center bg-gray-50">
                  {company.imageSrc ? (
                    <img
                      src={company.imageSrc}
                      alt={`${company.name} logo`}
                      className="max-h-32 max-w-full object-contain"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>

                {/* Company Info */}
                <div className="w-full md:w-2/3 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {company.name}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray-500">price</p>
                      <p className="text-gray-800">{company.salary}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">status</p>
                      <p className="text-gray-800">{company.level}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">work type</p>
                      <p className="text-gray-800">{company.workType}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">hours</p>
                      <p className="text-gray-800">{company.timeRange}</p>
                    </div>
                  </div>

                  {company.description && (
                    <div className="mt-4">
                      <p className="text-gray-700 text-sm">
                        {company.description}
                      </p>
                    </div>
                  )}

                  <div className="mt-4 flex items-center space-x-4">
                    <div className="cursor-pointer w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">
                        <Instagram size={20} />
                      </span>
                    </div>
                    <div className="cursor-pointer w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">
                        <Send size={20} />
                      </span>
                    </div>
                    <div className="cursor-pointer w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">
                        <Youtube size={20} />
                      </span>
                    </div>
                    <div className="ml-auto">
                      <a
                        href="tel:903458999"
                        className="text-blue-600 font-medium"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
