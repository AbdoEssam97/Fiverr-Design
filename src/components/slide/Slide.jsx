/* eslint-disable react/prop-types */
import Slider from "react-slick";

import "./Slide.scss";

const Slide = ({ children }) => {
  var settings = {
    autoplay: true,
    dots: false,
    arrows: true,
    centerMode: true,
    lazyLoad: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default Slide;
