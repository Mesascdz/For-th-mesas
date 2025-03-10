import React from "react";

const CoreCompetencies: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-orange-500 font-medium mb-2">
            You won&apos;t find another trucking consulting firm like us!
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            OUR CORE COMPETENCIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 01 */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-4xl font-bold text-orange-500 mb-6">01</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              YOU ARE A STARTUP TRUCKING COMPANY
            </h3>
            <p className="text-gray-700">
              Our team will help you set up and automate your back office
              operations, so you can focus on your main goal
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-4xl font-bold text-orange-500 mb-6">02</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              YOU&apos;RE AN INVESTOR OR ENTREPRENEUR INTERESTED IN TRUCKING, WE
              ARE YOUR TEAM!
            </h3>
            <p className="text-gray-700">
              We sell build-for-you trucking businesses!
            </p>
          </div>

          {/* Card 03 */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-4xl font-bold text-orange-500 mb-6">03</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              YOU ARE ALREADY IN TRUCKING
            </h3>
            <p className="text-gray-700">
              We can help you with your next stage growth goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
