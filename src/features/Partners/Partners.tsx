import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Partners = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      margin={10}
      loop
      autoplay
      autoplayTimeout={3000}
      autoplayHoverPause
      responsiveClass
      items={4}
    >
      <div className="item">
        <h4>1</h4>
      </div>
      <div className="item">
        <h4>2</h4>
      </div>
      <div className="item">
        <h4>3</h4>
      </div>
      <div className="item">
        <h4>4</h4>
      </div>
      <div className="item">
        <h4>5</h4>
      </div>
      <div className="item">
        <h4>6</h4>
      </div>
      <div className="item">
        <h4>7</h4>
      </div>
      <div className="item">
        <h4>8</h4>
      </div>
      <div className="item">
        <h4>9</h4>
      </div>
      <div className="item">
        <h4>10</h4>
      </div>
      <div className="item">
        <h4>11</h4>
      </div>
      <div className="item">
        <h4>12</h4>
      </div>
    </OwlCarousel>
  );
};

export default Partners;
