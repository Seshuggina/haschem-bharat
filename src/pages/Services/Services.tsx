import React, { useState } from "react";
import products from "./../../assets/data/products.json";
import impurities from "./../../assets/img/services/impurities.jpg";
import croservices from "./../../assets/img/services/cro-services.jpg";
import customsynthesys from "./../../assets/img/services/custom-synthesys-new.jpg";
import sourcing from "./../../assets/img/services/sourcing.jpg";

export const Services = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
      <section className="relative bg-gradient-to-b from-blue-900 to-blue-700 py-16 text-white text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto">
          <h1 className="text-4xl font-bold">Services</h1>
        </div>
      </section>
      
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* API Impurities/Reference Standards */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
              <h4 className="text-xl font-semibold mb-4">API Impurities/Reference Standards</h4>
              <img className="w-full h-auto rounded mb-4" src={impurities} alt="API Impurities" />
              <p className="text-gray-700">
                Our quality impurity reference materials - including intermediates, by-products, and degradation products - enable accuracy in both your qualitative and quantitative analysis, helping create safer medicines.
              </p>
              <h5 className="text-lg font-semibold mt-4">Our key product portfolio includes:</h5>
              <ul className="list-disc pl-5 text-gray-700">
                <li>API Standards</li>
                <li>Impurity Standards</li>
                <li>Metabolites</li>
                <li>Nitrosamines</li>
              </ul>
            </div>
            
            {/* Custom Synthesis */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
              <h4 className="text-xl font-semibold mb-4">Custom Synthesis</h4>
              <img className="w-full h-auto rounded mb-4" src={customsynthesys} alt="Custom Synthesis" />
              <p className="text-gray-700">
                Haschem specializes in high-quality products tailored for innovative research endeavors, covering pharmaceutical and medicinal research, forensic science, and environmental analysis.
              </p>
            </div>

            {/* CRO/CDMO Services */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
              <h4 className="text-xl font-semibold mb-4">CRO/CDMO Services</h4>
              <img className="w-full h-auto rounded mb-4" src={croservices} alt="CRO/CDMO Services" />
              <p className="text-gray-700">
                At HASCHEM, our CDMO services deliver tailored chemical synthesis solutions for active pharmaceutical ingredients, from initial concept to commercial production.
              </p>
              <h5 className="text-lg font-semibold mt-4">Our extensive range of services includes:</h5>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Expertise in synthesizing non-GMP drug substances</li>
                <li>Optimizing processes to reduce API research cycle time</li>
                <li>Impurity isolation, characterization, and synthesis</li>
              </ul>
            </div>

            {/* Chemical Sourcing */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
              <h4 className="text-xl font-semibold mb-4">Chemical Sourcing</h4>
              <img className="w-full h-auto rounded mb-4" src={sourcing} alt="Chemical Sourcing" />
              <p className="text-gray-700">
                The HASCHEM sourcing team has cultivated relationships with partners across India and China, offering unparalleled access to premium-quality products.
              </p>
              <p className="text-gray-700">
                Our portfolio extends to raw materials procurement and chemical synthesis services, ensuring exceptional value and quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};