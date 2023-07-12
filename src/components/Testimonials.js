// import React, { useState } from 'react'

// import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

// import Quotes from '../assets/quates.png'

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsTestimones = [
//     {img:require('../assets/testimones-1.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:1},
//     {img:require('../assets/testimones-2.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:2},
//     {img:require('../assets/testimones-3.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:3},
//     {img:require('../assets/testimones-1.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:4},
//     {img:require('../assets/testimones-3.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:5},
//     {img:require('../assets/testimones-4.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:6},
//     {img:require('../assets/testimones-3.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:7},
//     {img:require('../assets/testimones-4.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:8},
//     {img:require('../assets/testimones-1.png'),name:'Joe Doe',company:'Company Name',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',id:9},
//   ];

//   const slideLeft = () => {
//     setCurrentIndex((currentIndex - 1 + cardsTestimones.length) % cardsTestimones.length);
//   };

//   const slideRight = () => {
//     setCurrentIndex((currentIndex + 1) % cardsTestimones.length);
//   };

//   return (
//     <div className='testimonials'>
//       <div className="test testimony">
//         <div className="client">
//           <h2>Client Testimonials</h2>
//           <p>We value client feedback to help keep making revisions to our product to give more value to you the end user. These are some of the awesome reviews we got from some of our clients.</p>
         
//         </div>

//         <div className="test-inner">
//           {cardsTestimones.slice(currentIndex, currentIndex + 2).map((test) => (
//             <div className="test-cards" key={test.id}>
//               <img src={test.img} alt="testimony-img" />
//               <div className="quotes"> <img src={Quotes} alt="qts" /> </div>
//               <div className="test-text">
//                 <h3>{test.name}</h3>
//                 <h4>{test.company}</h4>
//                 <p>{test.description}</p>
//               </div>

//             </div>
//           ))}

             
//         </div>
//         <div className='test-arrow'>
//                 <BsFillArrowLeftCircleFill onClick={slideLeft} />
//                 <BsFillArrowRightCircleFill onClick={slideRight} />
//               </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import Quotes from '../assets/quates.png';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const cardsTestimones = [
    {img: require('../assets/testimones-1.png'), name:'Joe Doe', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:1},
    {img: require('../assets/testimones-2.png'), name:'John Smith', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:2},
    {img: require('../assets/testimones-3.png'), name:'Jane Doe', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:3},
    {img: require('../assets/testimones-4.png'), name:'Bob Smith', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:4},
    {img: require('../assets/testimones-1.png'), name:'Sarah Johnson', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:5},
    {img: require('../assets/testimones-2.png'), name:'Mike Brown', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:6},
    {img: require('../assets/testimones-3.png'), name:'Emily Davis', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:7},
    {img: require('../assets/testimones-4.png'), name:'Tom Wilson', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:8},
    {img: require('../assets/testimones-1.png'), name:'Amy Lee', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:9},
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    afterChange: (index) => setCurrentIndex(index),

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className='testimonials'>
      <div className="test testimony">
        <div className="client">
          <h2>Client Testimonials</h2>
          <p>We value client feedback to help keep making revisions to our product to give more value to you, the end user. These are some of the awesome reviews we received from some of our clients.</p>
        </div>

        <div className="test-inner">
          <Slider {...settings} ref={sliderRef}>
            {cardsTestimones.map((test) => (
              <div className="test-cards" key={test.id}>
                <img src={test.img} alt="testmones-img" />
                <div className="quotes"> <img src={Quotes} alt="qts" /> </div>
                <div className="test-text">
                  <h3>{test.name}</h3>
                  <h4>{test.company}</h4>
                  <p>{test.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className='test-arrow'>
          <BsFillArrowLeftCircleFill onClick={slideLeft} />
          <BsFillArrowRightCircleFill onClick={slideRight} />
        </div>
      </div>
   </div>
  );
};

export default Testimonials;