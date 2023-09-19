import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
// import img from "../assets/img/banner/1.jpg";
import img1 from "../assets/Frame 7.png";
import img2 from "../assets/Frame 8.png";
import img3 from "../assets/Frame 6.png";
const Banner = () => {
  const imgCollection = [img1, img2, img3];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full md-lg:mt-6 mt-5">
      <div className="w-[85%] lg:w-[90%] mx-auto">
        {/* <img className="w-full" src={img} alt="" /> */}
        <div className="w-full flex flex-wrap md-lg:gap-8">
          <div className="w-full">
            <div className="my-8">
              <Carousel
                autoPlay={true}
                infinite={true}
                arrows={true}
                showDots={true}
                responsive={responsive}
              >
                {imgCollection.map((img, i) => (
                  <Link
                    className="lg-md:h-[440px] h-auto w-full block"
                    key={i}
                    to="#"
                  >
                    <img src={img} alt="" />
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
