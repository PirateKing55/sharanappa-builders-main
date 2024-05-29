import { Container, Row, Col } from "react-bootstrap";
import Countdown from "@/components/Countdown/countdown";
import Link from "next/link";
const comingSoon = () => {

  return (
    <>
      {/* <!-- comingSoon area start --> */}
      <div
        className="ltn__coming-soon-area section-bg-2 text-color-white bg-overlay-theme-black-90 bg-image"
        style={{ backgroundImage: `url("../img/slider/62.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="coming-soon-inner">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">
                    {`// Welcome to you`}
                  </h6>
                  <h1 className="section-title white-color">
                    We Are Coming Soon
                  </h1>
                  <h5 className="ltn__secondary-color">October 26, 2023</h5>
                </div>
                <div
                  className="ltn__countdown mb-20"
                  data-countdown="2021/12/26"
                ></div>
                <Countdown
                  date="May 19, 2025"
                  className="ltn__countdown mb-20"
                />
                <div className="ltn__newsletter-inner mt-50">
                  <h3>Notify me when we launch</h3>
                  <form action="#" className="ltn__form-box">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your E-mail..."
                    />
                    <button
                      type="submit"
                      className="btn theme-btn-1 btn-effect-1"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
                <div className="btn-wrapper mt-50">
                  <Link
                    href="/contact"
                    className="btn theme-btn-2 btn-effect-2 text-uppercase"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- comingSoon area end --> */}
    </>
  );
};

export default comingSoon;
