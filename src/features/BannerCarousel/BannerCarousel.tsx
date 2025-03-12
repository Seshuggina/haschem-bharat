import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CarouselComponent = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      margin={10}
      loop
      autoplay
      autoplayTimeout={30000000}
      autoplayHoverPause
      responsiveClass
      items={1}
    >
      <div className="container mx-auto px-6 lg:px-8 flex flex-row items-center justify-between">
        <div className="flex-1">
          <h4 className="text-2xl font-bold">
            API Impurities/Reference Standards
          </h4>
          <p className="text-lg text-gray-700 mt-2">
            Our mission is to deliver premium-grade API impurities and Reference
            standards, setting the benchmark for quality and reliability in the
            industry.
          </p>
        </div>
        <div className="flex-1">&nbsp;</div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 flex flex-row items-center">
        <div>
          <h4 className="text-2xl font-bold">CUSTOM SYNTHESIS</h4>
          <p className="text-lg text-gray-700 mt-2">
            Our experienced team of Ph.D. chemists specializes in meticulously
            crafting optimal synthetic pathways for both novel and established
            compounds
          </p>
        </div>
        <div></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 flex flex-row items-center">
        <div>
          <h4 className="text-2xl font-bold">CRO/CDMO services</h4>
          <p className="text-lg text-gray-700 mt-2">
            We offer an extensive array of services encompassing drug discovery,
            development, and manufacturing. Our commitment is to deliver
            innovative solutions tailored to meet the diverse needs of our
            clients
          </p>
        </div>
        <div></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 flex flex-row items-center">
        <div>
          <h4 className="text-2xl font-bold">Chemical Sourcing</h4>
          <p className="text-lg text-gray-700 mt-2">
            The HASCHEM sourcing team has diligently cultivated relationships
            over several years with numerous partner organizations renowned for
            their specialized skills and technical prowess across India and
            China
          </p>
        </div>
        <div></div>
      </div>
    </OwlCarousel>
  );
};

export default CarouselComponent;
