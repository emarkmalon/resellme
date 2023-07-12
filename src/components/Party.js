import React, { useRef } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import Slider from 'react-slick';

const Party = () => {
  const cardsPartners = [
    { img: require('../assets/partners/partner-1.png'), id: 1 },
    { img: require('../assets/partners/partner-2.png'), id: 2 },
    { img: require('../assets/partners/partner-3.png'), id: 3 },
    { img: require('../assets/partners/partner-4.png'), id: 4 },
    { img: require('../assets/partners/partner-5.png'), id: 5 },
    { img: require('../assets/partners/partner-6.png'), id: 6 },
    { img: require('../assets/partners/partner-7.png'), id: 7 },
    { img: require('../assets/partners/partner-8.png'), id: 8 },
  ];

  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // Slick carousel settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='partners'>
      <h2>Our Partners</h2>
      <Slider {...sliderSettings} className="partners-company" ref={sliderRef}>
        {cardsPartners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img src={partner.img} alt="company-logo" />
          </div>
        ))}
      </Slider>
      <div className='part-arrow'>
        {/* Left arrow icon */}
        <BsFillArrowLeftCircleFill onClick={goToPrevSlide} />

        {/* Right arrow icon */}
        <BsFillArrowRightCircleFill onClick={goToNextSlide} />
      </div>
    </div>
  );
};

export default Party;