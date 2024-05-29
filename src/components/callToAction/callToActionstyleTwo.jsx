import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const callToActionstyleTwo = () => {
  return (
    <>
      <div
        className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120"
        style={{ backgroundImage: `url("../img/bg/6.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="call-to-action-inner call-to-action-inner-4 text-center">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">{`//  any question you have  //`}</h6>
                  <h1 className="section-title white-color">897-876-987-90</h1>
                </div>
                <div className="btn-wrapper">
                  <Link
                    href="tel:+123456789"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    MAKE A CALL
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-transparent btn-effect-3 white-color"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="ltn__call-to-4-img-1">
          <img src="/img/slider/21.png" alt="#" />
        </div>
        <div className="ltn__call-to-4-img-2">
          <img src="/img/bg/11.png" alt="#" />
        </div>
      </div>
    </>
  );
};

export default callToActionstyleTwo;
