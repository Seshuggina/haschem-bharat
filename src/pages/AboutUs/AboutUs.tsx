import { useState } from "react";
import "./AboutUs.scss";
import OwlCarousel from "react-owl-carousel";

import mission from "./../../assets/img/aboutUs/mission.jpg";
import vision from "./../../assets/img/aboutUs/vision.jpg";
import aboutText from "./../../assets/img/aboutUs/aboutText.jpg";

import achievement from "./../../assets/img/aboutUs/icons/achievement.png";
import awareness from "./../../assets/img/aboutUs/icons/awareness.png";
import customerService from "./../../assets/img/aboutUs/icons/awareness.png";

export const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<
    "values" | "integrity" | "innovation"
  >("values");

  const tabs: Array<"values" | "integrity" | "innovation"> = [
    "values",
    "integrity",
    "innovation",
  ];

  return (
    <>
      <section className="flex aboutus-banner relative py-16 hb-h-350 items-center text-white">
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mt-16">About Us</h1>
        </div>
      </section>

      <section className="py-16 hb-aboutus-section-1">
        <div className="container mx-auto px-4">
          <p className="pb-8">
            <span className="inline-flex items-center rounded-full bg-yellow-50 px-5 py-2 text-sm font-medium text-orange ring-1 ring-yellow-600/20 ring-inset">
              CHEMOVATE
            </span>
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold pb-4">
                Unveiling HASCHEM Bharat: Where Chemistry Meets Innovation
              </h2>
              <p className="mb-4">
                <strong>HASCHEM Bharat</strong> Labs operates out of Vancouver,
                Canada, and is helmed by distinguished professionals delivering
                premium reference standards, research chemicals, and
                unparalleled services.
              </p>
              <h5 className="text-xl font-semibold">
                Our key product portfolio includes:
              </h5>
              <ul className="list-disc pl-5 mb-4">
                <li>API Standards</li>
                <li>Impurity Standards</li>
                <li>Metabolites</li>
                <li>Nitrosamines</li>
              </ul>
              <img
                src={aboutText}
                alt="About Us"
                className="rounded-lg w-full h-auto mb-4 block lg:hidden"
              />
              <button
                data-content="See Services"
                className="hb-btn hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700"
              >
                <span className="hb-btn-text">Services</span>
              </button>
            </div>
            <div className="flex-1 text-white text-center lg:block hidden">
              <img
                src={aboutText}
                alt="About Us"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 hb-aboutus-section-2">
        <div className="container mx-auto px-4">
          <p className="pb-8 text-center">
            <span className="inline-flex items-center rounded-full bg-yellow-50 px-5 py-2 text-sm font-medium text-orange ring-1 ring-yellow-600/20 ring-inset">
              CHEMOVATE
            </span>
          </p>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold pb-4 text-center">
              Always Ready To Give The Best Services
            </h2>

            {/* Tabs Section */}
            <div className="flex mx-4 md:mx-16 px-4 md:px-16 rounded gap-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`flex-1 h-16 rounded flex items-center justify-center text-gray-700 font-semibold cursor-pointer transition 
                    ${
                      activeTab === tab
                        ? "hb-bg-primary text-white hb-bg-primary:hover"
                        : "hover:bg-primary-500"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "values"
                    ? "Our Values"
                    : tab === "integrity"
                    ? "Our Integrity"
                    : "Innovation"}
                </button>
              ))}
            </div>

            {/* Content Sections */}
            {activeTab === "values" && (
              <div className="flex items-center flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold pb-4">
                    Core Values: Our Guiding Principles
                  </h2>
                  <p className="mb-4">
                    Our values at HASCHEM Bharat encompass innovation,
                    integrity, and excellence. We are dedicated to pushing the
                    boundaries of knowledge and delivering high-quality
                    solutions. Collaboration, ethics, and a commitment to our
                    clients define our core principles.
                  </p>
                  <img
                    src={mission}
                    alt="Mission"
                    className="rounded-lg w-full h-auto mb-4 block lg:hidden"
                  />
                  <button
                    data-content="Contact"
                    className="hb-btn hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700"
                  >
                    <span className="hb-btn-text">Get In Touch</span>
                  </button>
                </div>
                <div className="flex-1 text-center lg:block hidden">
                  <img
                    src={mission}
                    alt="Mission"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            )}

            {activeTab === "integrity" && (
              <div className="flex items-center flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold pb-4">Our Integrity</h2>
                  <p className="mb-4">
                    <p className="mb-2">
                      At <strong>HASCHEM Bharat</strong> Labs, integrity is at
                      the core of
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>
                        <strong>Ethical Practices</strong> - Upholding the
                        highest standards of honesty and transparency in our
                        research and operations.
                      </li>
                      <li>
                        <strong>Quality Assurance</strong> - Ensuring
                        uncompromised accuracy and reliability in our
                        pharmaceutical standards.
                      </li>
                      <li>
                        <strong> Regulatory Compliance</strong> - Adhering to
                        global industry guidelines to deliver trusted solutions.
                      </li>
                      <li>
                        <strong>Accountability</strong> - Taking full
                        responsibility for our actions and continuously striving
                        for excellence
                      </li>
                    </ul>
                    <p>
                      Our dedication to integrity drives us to build long-term
                      trust with our partners, clients, and the scientific
                      community.
                    </p>
                  </p>
                  <button className="hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700">
                    Get In Touch
                  </button>
                </div>
                <div className="flex-1">
                  <img
                    src={vision}
                    alt="Impurities"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            )}

            {activeTab === "innovation" && (
              <div className="flex items-center flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold pb-4">Innovation</h2>
                  <p className="mb-4">Generate related content.</p>
                  <div className="mb-4">
                    <p>
                      At HASCHEM Bharat Labs, innovation is the driving force
                      behind our scientific advancements. We are dedicated to:
                    </p>
                    🚀
                    <strong>Cutting-Edge Research</strong> - Continuously
                    exploring new methodologies and technologies to enhance
                    pharmaceutical standards.
                    <br />
                    <strong>🔬 Advanced Solutions</strong> - Developing
                    high-quality API standards, impurity standards, metabolites,
                    and nitrosamines to support global research. <br />
                    💡 <strong>Future-Ready Approach</strong> - Investing in
                    next-generation scientific discoveries to shape the future
                    of healthcare and medicine. <br />
                    🤝 <strong>Collaborative Excellence</strong> - Partnering
                    with industry leaders to foster groundbreaking advancements
                    in pharmaceutical sciences. Through innovation, we redefine
                    possibilities and set new benchmarks in chemical and
                    pharmaceutical research.
                  </div>
                  <button className="hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700">
                    Get In Touch
                  </button>
                </div>
                <div className="flex-1 text-center">
                  <img
                    src={mission}
                    alt="Impurities"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pt-16 pb-30 hb-aboutus-section-3">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold pb-4 sm:text-left text-center">
            Why Work With Us
          </h2>
          <div className="container mx-auto px-4">
            <OwlCarousel
              className="owl-theme"
              margin={10}
              responsive={{
                100: { items: 1 },
                500: { items: 1 },
                991: { items: 2 },
                1199: { items: 2 },
                1400: { items: 3 },
              }}
            >
              {[
                {
                  title: "EXPERTISE AND EXPERIENCE",
                  image: achievement,
                  alt: "Expertise and Experience",
                  description:
                    "Our team of highly skilled and experienced organic chemists provides extensive synthesis services for small/complex molecules, catering to scales from milligrams to hundreds of grams.",
                },
                {
                  title: "HIGH QUALITY PRODUCTS",
                  image: awareness,
                  alt: "High-Quality Products",
                  description:
                    "Committed to excellence, we rigorously test every compound using validated methods to ensure quality and reliability before delivery.",
                },
                {
                  title: "CUSTOMER CENTRIC APPROACH",
                  image: customerService,
                  alt: "Exceptional Customer Service",
                  description:
                    "Our customer-centric approach involves prioritizing the unique needs of clients by delivering high-quality, reliable standards, ensuring timely support, and fostering collaborative relationships to enhance customer satisfaction and trust.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-b-4 border-primary shadow-lg rounded-lg p-6"
                >
                  <h4 className="text-center text-xl font-semibold mb-4">
                    {item.title}
                  </h4>
                  <figure className="flex justify-center mb-4">
                    <img
                      className="w-24 h-24 object-contain"
                      loading="lazy"
                      src={item.image}
                      alt={item.alt}
                    />
                  </figure>
                  <p className="text-center text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};
