




import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Cases = () => {
  const sliderRef = useRef(null);

  const casesItems = [
     {img:require('../assets/cases/case1.png'), title:'Web Development Freelancers', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',id:1},
     {img:require('../assets/cases/case2.png'),title:'Small Housing & Domain Registration Companies', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',id:2},
     {img:require('../assets/cases/case3.png'),title:'Company Registries', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',id:3},
     {img:require('../assets/cases/case4.png'),title:'Small & Domain Companies', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',id:4},
     {img:require('../assets/cases/case5.png'), title:'Other', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',id:5},
     ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className='cases'>
      <h2>Resellme’s Use Cases</h2>
      <div className="case">
        <Slider {...settings} ref={sliderRef}>
          {casesItems.map((item) => (
           <div className="case-card" key={item.id}>
           <div className='icon'>
           <img src={item.img} alt="icons" />
           </div>
           <div className='icon-text'>
           <h3>{item.title}</h3>
           <p>{item.description}</p>
           </div>
           <button className='btn star-btn'>READ MORE</button>
           </div>
          ))}
        </Slider>
      </div>

      <div className="arrows">
        <BsFillArrowLeftCircleFill onClick={previousSlide} />
        <BsFillArrowRightCircleFill onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Cases;