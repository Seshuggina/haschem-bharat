import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Partners.scss";

import curia from "./../../assets/img/partners/curia.png";
import drreddy from "./../../assets/img/partners/drreddy.png";
import granules from "./../../assets/img/partners/granules.png";
import leepharma from "./../../assets/img/partners/leepharma.png";
import nato from "./../../assets/img/partners/nato.png";
import aragen from "./../../assets/img/partners/aragen.png";
import csir from "./../../assets/img/partners/csir.png";
import enveda from "./../../assets/img/partners/enveda.png";
import honour from "./../../assets/img/partners/honour.png";
import laurus from "./../../assets/img/partners/laurus.png";
import msn from "./../../assets/img/partners/msn.png";
import neuland from "./../../assets/img/partners/neuland.png";
import nuwill from "./../../assets/img/partners/nuwill.png";
import seasons from "./../../assets/img/partners/seasons.png";
import ssv from "./../../assets/img/partners/ssv.png";
import vasudha from "./../../assets/img/partners/vasudha.png";


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
      <div className="items-center flex justify-center">
          <img src={aragen} alt="Aragen Life Sciences Ltd" />
      </div>
      <div className="items-center flex justify-center">
          <img src={csir} alt="Central Institute of Medicinal and Aromatic Plants" />
      </div>
      <div className="items-center flex justify-center">
          <img src={enveda} alt="Enveda" />
      </div>
      <div className="items-center flex justify-center">
          <img src={honour} alt="Honour Lab Limited" />
      </div>
      <div className="items-center flex justify-center">
          <img src={laurus} alt="Laurus labs" />
      </div>
      <div className="items-center flex justify-center">
          <img src={msn} alt="MSN Laboratories" />
      </div>
      <div className="items-center flex justify-center">
          <img src={neuland} alt="Neuland Labs" />
      </div>
      <div className="items-center flex justify-center">
          <img src={nuwill} alt="Nuwill" />
      </div>
      <div className="items-center flex justify-center">
          <img src={seasons} alt="Seasons" />
      </div>
      <div className="items-center flex justify-center">
          <img src={ssv} alt="SSV" />
      </div>
      <div className="items-center flex justify-center">
          <img src={vasudha} alt="Vasudha" />
      </div>
    </OwlCarousel>
  );
};

export default Partners;
