import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSectionOne() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img src="/img/others/11.png" alt="About Us Image" />
            </div>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Dream Living Spaces Setting New Build
                </h1>
                <p>
                  Over 39,000 people work for us in more than 70 countries all
                  over the This breadth of global coverage, combined with
                  specialist services
                </p>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-4"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      The Perfect Residency
                    </Link>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                    tempor incididunt ut labore et
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-call-center-agent"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      Global Architect Experts
                    </Link>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                    tempor incididunt ut labore et
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-maps-and-location"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      Built-in Storage Cupboards
                    </Link>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                    tempor incididunt ut labore et
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionOne;
