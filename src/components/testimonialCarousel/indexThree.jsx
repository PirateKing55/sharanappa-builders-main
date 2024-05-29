import { useState } from "react";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaRegComments
} from "react-icons/fa";

function TestimonialStyleThree({ data }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const Herosettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 580,
            settings: {
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        }
    ]
  };


  const Navsettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    centerMode: true,
    centerPadding: "0px",
    dots: false /* image slide dots */,
    arrows: false /* image slide arrow */,
    focusOnSelect: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
     
      <div className="ltn__slider-11-inner position-relative">
        <Slider
          {...Herosettings}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1"
        >
          {data.map((item, key) => {
            return (
                <div className="ltn__testimonial-item-5" key={key}>
                <div className="ltn__quote-icon">
                    <FaRegComments/>
                </div>
                <div className="ltn__testimonial-image">
                    <img src={`/img/testimonial/${item.img}`} alt="quote"/>
                </div>
                <div className="ltn__testimonial-info">
                    <p>{item.description}</p>
                    <h4>{item.name}</h4>
                    <h6>{item.type}</h6>
                </div>
            </div>
            );
          })}
        </Slider>


        <Slider
              {...Navsettings}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              className="ltn__testimonial-quote-menu d-none d-lg-block"
            >
              {data.map((item, key) => {
                return (
                  <img key={key} src={`/img/testimonial/${item.img}`} alt="#" />
                );
              })}
            </Slider>
      </div>
    </>
  );
}

export default TestimonialStyleThree;

