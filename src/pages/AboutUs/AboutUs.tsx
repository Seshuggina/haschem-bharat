import React from "react";
// import { OurServices } from "components/OurServices/OurServices";
// import { WhyWorkWithUs } from "components/WhyWorkWithUs/WhyWorkWithUs";

// import impurities from "./../assets/img/aboutUs/impurities.jpg";
// import vision from "./../assets/img/aboutUs/vision.jpg";
// import mission from "./../assets/img/aboutUs/mission.jpg";

export const AboutUs = () => {
  return (
    <>
      <section className="relative bg-gray-900 py-10">
        <div className="absolute inset-0 bg-cover bg-center aboutus-banner"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </section>
      
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
            <div className="p-6 lg:p-10">
              <h4 className="text-2xl font-bold">HASCHEM Bharat</h4>
              {/* <img className="w-full h-auto my-4 rounded" src={impurities} alt="About US" /> */}
              <p className="mb-4">
                <strong>HASCHEM Bharat</strong> Labs operates out of Vancouver, Canada, and is helmed by distinguished professionals delivering premium reference standards, research chemicals, and unparalleled services.
              </p>
              <h5 className="text-xl font-semibold">Our key product portfolio includes:</h5>
              <ul className="list-disc pl-5">
                <li>API Standards</li>
                <li>Impurity Standards</li>
                <li>Metabolites</li>
                <li>Nitrosamines</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
            <div className="p-6 lg:p-10">
              <h4 className="text-2xl font-bold">Why Work With Us</h4>
              {/* <WhyWorkWithUs /> */}
            </div>
          </div>

          <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
            <div className="p-6 lg:p-10">
              <h4 className="text-2xl font-bold">Vision</h4>
              {/* <img className="w-full h-auto my-4 rounded" src={vision} alt="Vision" /> */}
              <p>To be the global leader in providing cutting-edge research solutions and exceptional services that advance scientific discovery and innovation.</p>
            </div>
          </div>

          <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
            <div className="p-6 lg:p-10">
              <h4 className="text-2xl font-bold">Mission</h4>
              {/* <img className="w-full h-auto my-4 rounded" src={mission} alt="Mission" /> */}
              <ul className="list-disc pl-5">
                <li><strong>Quality and Excellence:</strong> Deliver high-quality reference standards and research chemicals.</li>
                <li><strong>Customer-Centric Approach:</strong> Offer services tailored to client requirements.</li>
                <li><strong>Innovation:</strong> Continuously enhance product offerings.</li>
                <li><strong>Global Expansion:</strong> Strategically expand in international markets.</li>
                <li><strong>Sustainability:</strong> Commit to sustainable practices.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
            <div className="p-6 lg:p-10">
              <h4 className="text-2xl font-bold">Our Services</h4>
              {/* <OurServices /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
