import { useState } from "react";
import ModalVideo from "react-modal-video";
import { FaPlay, FaHome } from "react-icons/fa";
import { Container, Col, Row } from "react-bootstrap";

function HeroSectionStyleFour() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="tlThdr3O5Qo"
        onClose={() => setOpen(false)}
      />

      <div className="ltn__slider-area ltn__slider-6 section-bg-2">
        <div
          className="ltn__slide-item ltn__slide-item-6 ltn__slide-animation-active text-color-white bg-image bg-overlay-theme-black-60"
          style={{
            backgroundImage: `url("/img/slider/14.jpg")`,
          }}
        >
          <div className="ltn__slide-item-inner text-center">
            <Container>
              <Row>
                <Col xs={12} className="align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <div className="slide-video mb-50">
                        <button
                          onClick={() => setOpen(true)}
                          className="ltn__video-icon-2 border-radius-no ltn__secondary-bg"
                        >
                          <FaPlay className="icon-play" />
                        </button>
                      </div>
                      <h6 className="slide-sub-title white-color animated">
                        <span className="me-1">
                          <FaHome />
                        </span>

                        Real Estate Agency
                      </h6>
                      <h1 className="slide-title text-uppercase animated ">
                        Find Your Dream <br /> House By Us
                      </h1>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionStyleFour;
