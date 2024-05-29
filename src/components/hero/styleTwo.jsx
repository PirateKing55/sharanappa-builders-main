import { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import {
  FaPlay,
  FaHome,
  FaArrowRight,
  FaArrowLeft,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

function HeroSectionStyleTwo({ data }) {
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
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Navsettings = {
    slidesToShow: 3,
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

  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="HnbMYzdjuBs"
        onClose={() => setOpen(false)}
      />

      <div className="ltn__slider-11-inner position-relative">
        <Slider
          {...Herosettings}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          className="ltn__slider-11-active"
        >
          {data.map((item, key) => {
            return (
              <div
                className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11"
                key={key}
              >
                <div
                  className={`ltn__slide-item-inner ${item.variationLeft ? "text-right text-end" : ""
                    }`}
                >
                  <Container className="container">
                    <Row className="row">
                      <Col xs={12} className="align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h6 className="slide-sub-title animated">
                              <span>
                                <FaHome />
                              </span>
                              {item.subtitle}
                            </h6>
                            <h1 className="slide-title animated">
                              {item.Title}
                            </h1>
                            <div className="slide-brief animated">
                              <p>{item.Desc}</p>
                            </div>
                            <div className="btn-wrapper animated">
                              <Link
                                href="/about"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                {item.buttonText}
                              </Link>

                              {item.videoButton ? (
                                <button
                                  onClick={() => setOpen(true)}
                                  className="ltn__video-play-btn bg-white"
                                >
                                  <FaPlay className="icon-play  ltn__secondary-color" />
                                </button>
                              ) : (
                                <Link
                                  href="/about"
                                  className="btn btn-transparent btn-effect-3"
                                >
                                  {item.learnMoreButtonText}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`slide-item-img ${item.variationLeft ? "slide-img-left" : ""
                            }`}
                        >
                          <img src={`/img/slider/${item.heroimage}`} alt="#" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            );
          })}
        </Slider>

        {/* <!-- slider-sticky-icon --> */}
        <div className="slider-sticky-icon-2">
          <ul>
            <li>
              <Link href="#">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaDribbble />
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- slider-4-img-slide-arrow --> */}
        <div className="ltn__slider-11-img-slide-arrow">
          <div className="ltn__slider-11-img-slide-arrow-inner">
            <Slider
              {...Navsettings}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              className="ltn__slider-11-img-slide-arrow-active"
            >
              {data.map((item, key) => {
                return (
                  <div className="image-slide-item" key={key}>
                    <img src={`/img/slider/${item.heroimage}`} alt="#" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionStyleTwo;
