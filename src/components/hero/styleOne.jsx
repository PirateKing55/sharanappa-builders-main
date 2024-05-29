import { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import { FaPlay, FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { ModalComponent } from "../modal/Modal";

function HeroSectionStyleOne({ data }) {
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

  const downloadBrochure = () => {
    if (sessionStorage.getItem("name") && sessionStorage.getItem("phone")) {
      return window.open("https://drive.google.com/uc?export=download&id=0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx");
    }
    setIsModalOpen(true)
  }


  const Herosettings = {
    dots: true,
    fade: true,
    cssEase: "linear",
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="HnbMYzdjuBs"
        onClose={() => setOpen(false)}
      />

      <div className="ltn__slider-area ltn__slider-3  section-bg-1">
        <Slider
          {...Herosettings}
          className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1"
        >
          {data.map((item, key) => {
            return (
              <div
                className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 position-relative"
                key={key}
              >
                <ModalComponent
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
                <div
                  className={`ltn__slide-item-inner ${item.variationLeft ? "text-right text-end" : ""
                    }`}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
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
                              <div className="theme-btn-1 btn btn-effect-1" onClick={downloadBrochure}>
                                {item.buttonText}
                              </div>

                              {item.videoButton ? (
                                <button
                                  onClick={() => setOpen(true)}
                                  className="ltn__video-play-btn bg-white"
                                >
                                  {/* <i className="icon-play  ltn__secondary-color"></i> */}
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
                          <img src="img/slider/21.png" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default HeroSectionStyleOne;
