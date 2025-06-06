import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Partners.scss";

import curia from "./../../assets/img/partners/curia.png";
import drreddy from "./../../assets/img/partners/drreddy.png";
import granules from "./../../assets/img/partners/granules.png";
import leepharma from "./../../assets/img/partners/leepharma.png";
import nato from "./../../assets/img/partners/nato.png";

const Partners = () => {
  return (
    <OwlCarousel
      margin={20}
      loop={true}
      autoplay={true}
      autoplayTimeout={2500}
      autoplayHoverPause={true}
      mouseDrag={true}
      touchDrag={true}
      freeDrag={true}
      responsive={{
        100: {
          items: 2,
        },
        500: {
          items: 3,
        },
        991: {
          items: 4,
        },
        1400: {
          items: 5,
        },
      }}
    >
      <div className="items-center flex justify-center">
          <img src={curia} alt="Curia Global" />
      </div>
      <div className="items-center flex justify-center">
          <img src={drreddy} alt="Dr Reddys" />
      </div>
      <div className="items-center flex justify-center">
          <img src={granules} alt="Granules India" />
      </div>
      <div className="items-center flex justify-center">
          <img src={leepharma} alt="Lee Pharma" />
      </div>
      <div className="items-center flex justify-center">
          <img src={nato} alt="Natco Pharma" />
      </div>
    </OwlCarousel>
  );
};

export default Partners;
