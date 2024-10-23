import React from "react";
import Slider from "react-slick";
import './Carousel.css';

import containerInlay from '../../../assets/images/changePhone/container-inlay.svg';
import containerInlayMask from '../../../assets/images/changePhone/mask.svg';
import inlay1 from '../../../assets/images/changePhone/inlay1.svg';
import inlay2 from '../../../assets/images/changePhone/inlay2.svg';
import inlay3 from '../../../assets/images/changePhone/inlay3.svg';

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '50px',
        },
      },
    ],
  };

  const images = [
    { src: inlay1, alt: 'phone1' },
    { src: inlay2, alt: 'phone2' },
    { src: inlay3, alt: 'phone3' },
  ];

  return (
    <div className="carousel">
      <img className="bg-mask" src={containerInlayMask} alt="container" />
      <img className="bg-mask" src={containerInlay} alt="container" />
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image.src} alt={image.alt}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
