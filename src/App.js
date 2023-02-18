import Main from "./components/main";
import { useState } from "react";
import Slider from "react-slick";
import vincent1 from "./assets/1.jpg";
import vincent2 from "./assets/2.jpg";
import vincent3 from "./assets/3.jpg";
import vincent4 from "./assets/4.jpg";
import vincent5 from "./assets/5.jpg";
import vincent6 from "./assets/6.jpg";
import vincent7 from "./assets/7.jpg";
import vincent8 from "./assets/8.jpg";
import vincent9 from "./assets/9.jpg";
import vincent10 from "./assets/10.jpg";
import vincent11 from "./assets/11.jpg";
import vincent12 from "./assets/12.jpg";
import vincent13 from "./assets/13.jpg";
import vincent14 from "./assets/14.jpg";
import vincent15 from "./assets/15.jpg";
import vincent16 from "./assets/16.jpg";
import vincent17 from "./assets/17.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import style from "./App.css";

const images = [vincent1, vincent2, vincent3, vincent4, vincent5,
  vincent6, vincent7, vincent8, vincent9, vincent10, vincent11,
  vincent12, vincent13, vincent14, vincent15, vincent16, vincent17];

function App() {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Main />
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx == imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
