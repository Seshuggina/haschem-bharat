import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./BannerCarousel.scss";

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
          <h3>
            API Impurities/Reference Standards
          </h3>
          <p>
            Our mission is to deliver premium-grade API impurities and Reference
            standards, setting the benchmark for quality and reliability in the
            industry.
          </p>
        </div>
        <div className="flex-1">&nbsp;</div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 flex flex-row items-center">
        <div className="flex-1">
          <h3>CUSTOM SYNTHESIS</h3>
          <p>
            Our experienced team of Ph.D. chemists specializes in meticulously
            crafting optimal synthetic pathways for both novel and established
            compounds
          </p>
        </div>
        <div className="flex-1">&nbsp;</div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 flex flex-row items-center">
        <div className="flex-1">
          <h3>CRO/CDMO services</h3>
          <p>
            We offer an extensive array of services encompassing drug discovery,
            development, and manufacturing. Our commitment is to deliver
            innovative solutions tailored to meet the diverse needs of our
            clients
          </p>
        </div>
        <div className="flex-1">&nbsp;</div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 flex flex-row items-center">
        <div className="flex-1">
          <h3>Chemical Sourcing</h3>
          <p>
            The HASCHEM sourcing team has diligently cultivated relationships
            over several years with numerous partner organizations renowned for
            their specialized skills and technical prowess across India and
            China
          </p>
        </div>
        <div className="flex-1">&nbsp;</div>
      </div>
    </OwlCarousel>
  );
};

export default CarouselComponent;
