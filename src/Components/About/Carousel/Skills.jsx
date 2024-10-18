import React from "react";
import "./Skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from '../../../assets/html.svg'
import css from '../../../assets/css.svg'
import js from '../../../assets/js.svg'
import react from '../../../assets/react.svg'
import tailwind from '../../../assets/tailwind.svg'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Skills = () => {
  return (
    <div>
      <Carousel responsive={responsive}
       containerClass="carousel-container"
       autoPlay={true}
       infinite={true}
       slidesToSlide={1}
       autoPlaySpeed={2000}
       customTransition="all 1s"
       transitionDuration={1000}
       removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
       >
        <div className="carousel-itens"><img src={html}/><p>HTML</p></div>
        <div className="carousel-itens"><img src={css}/><p>CSS</p></div>
        <div className="carousel-itens"><img src={js}/><p>javaScript</p></div>
        <div className="carousel-itens"><img src={react}/>React JS</div>
        <div className="carousel-itens"><img src={tailwind}/>TailWind</div>

      </Carousel>
    </div>
  );
};

export default Skills;
