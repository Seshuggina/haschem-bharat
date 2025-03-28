import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import curia from "./../../assets/img/partners/curia.png";
import drreddy from "./../../assets/img/partners/drreddy.png";
import granules from "./../../assets/img/partners/granules.png";
import leepharma from "./../../assets/img/partners/leepharma.png";
import nato from "./../../assets/img/partners/leepharma.png";

const Partners = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      margin={100}
      loop
      autoplay
      autoplayTimeout={300000000}
      autoplayHoverPause
      responsiveClass
      items={4}
    >
      <div className="items-center flex justify-center">
        <a href="https://curiaglobal.com/" target="_blank" rel="noreferrer">
          <img src={curia} alt="Curia Global" />
        </a>
      </div>
      <div className="items-center flex justify-center">
        <a href="https://www.drreddys.com/" target="_blank" rel="noreferrer">
          <img src={drreddy} alt="Dr Reddys" />
        </a>
      </div>
      <div className="items-center flex justify-center">
        <a
          href="https://www.granulesindia.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={granules} alt="Granules India" />
        </a>
      </div>
      <div className="items-center flex justify-center">
        <a href="https://www.leepharma.com/" target="_blank" rel="noreferrer">
          <img src={leepharma} alt="Lee Pharma" />
        </a>
      </div>
      <div className="items-center flex justify-center">
        <a
          href="https://www.natcopharma.co.in/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={nato} alt="Natco Pharma" />
        </a>
      </div>
    </OwlCarousel>
  );
};

export default Partners;
