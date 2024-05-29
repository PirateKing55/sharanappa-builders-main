import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalVideo from "react-modal-video";
import { useState } from "react";

function AboutUsSectionTwo() {
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
      <Container>
        <Row>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area mb-20">
                <h6 className="section-subtitle ltn__secondary-color">
                  Building Facilities
                </h6>
                <h1 className="section-title">
                  Making living spaces More Beautiful
                </h1>
                <p>
                  Over 39,000 people work for us in more than 70 countries all
                  over the This breadth of global coverage, combined with
                  specialist services
                </p>
              </div>
              <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
                <li>
                  <i className="icon-done"></i>
                  Living rooms are pre-wired for Surround
                </li>
                <li>
                  <i className="icon-done"></i>
                  Luxurious interior design and amenities
                </li>
                <li>
                  <i className="icon-done"></i>
                  Nestled in the Buckhead Vinings communities
                </li>
                <li>
                  <i className="icon-done"></i>
                  Private balconies with stunning views
                </li>
                <li>
                  <i className="icon-done"></i>A rare combination of inspired
                  architecture
                </li>
                <li>
                  <i className="icon-done"></i>
                  Outdoor grilling with dining court
                </li>
              </ul>
              <div className="  ltn__animation-pulse2 text-center mt-30">
                <button
                  className="ltn__video-play-btn bg-white--- ltn__secondary-bg"
                  onClick={() => setOpen(true)}
                >
                  <i className="icon-play white-color"></i>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-img-wrap about-img-left"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionTwo;
