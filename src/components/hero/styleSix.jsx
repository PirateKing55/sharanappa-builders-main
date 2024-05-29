import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaCarAlt,
  FaCookie,
  FaHome,
} from "react-icons/fa";
import Link from "next/link";

function HeroSectionStyleSix({ navMenuClass }) {
  return (
    <>
      <div className="ltn__slider-area ltn__slider-4 position-relative  ltn__primary-bg fix">
        <div className="ltn__slide-animation-active">
          {/* <!-- HTML5 VIDEO --> */}

          <video autoPlay muted loop id="myVideo">
            <source src="/media/3.mp4" type="video/mp4" />
          </video>

          {/* <!-- YouTube VIDEO --> */}

          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-overlay-theme-black-30">
            <div className="ltn__slide-item-inner text-center">
              <Container>
                <Row>
                  <Col xs={12} className="align-self-center">
                    <div className="slide-item-car-dealer-form">
                      <div className="section-title-area ltn__section-title-2 text-center">
                        <h1 className="section-title  text-color-white">
                          Find Your
                          <span className="ltn__secondary-color-3">
                            Perfect
                          </span>
                          Home
                        </h1>
                      </div>
                      <div className="ltn__car-dealer-form-tab">
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="first"
                        >
                          <div
                            className={`ltn__tab-menu text-uppercase ${navMenuClass}`}
                          >
                            <Nav
                              variant="pills"
                              className="justify-content-center"
                            >
                              <Nav.Item className="me-2">
                                <Nav.Link eventKey="first">
                                  <FaHome />
                                  sell home
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="second">
                                  <FaHome />
                                  rent home
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>

                          <Tab.Content className="tab-content bg-white box-shadow-1 ltn__border position-relative pb-10">
                            <Tab.Pane eventKey="first">
                              <div className="car-dealer-form-inner">
                                <form
                                  action="#"
                                  className="ltn__car-dealer-form-box row mb--30"
                                >
                                  <Col
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    className="ltn__car-dealer-form-item ltn__custom-icon"
                                  >
                                    <span className="inline-icon">
                                      <FaCalendarAlt />
                                    </span>
                                    <Form.Select className="nice-select">
                                      <option>Choose Area</option>
                                      <option value="1">Chicago</option>
                                      <option value="2">London</option>
                                      <option value="3">Los Angeles</option>
                                      <option value="4">New York</option>
                                      <option value="5">New Jersey</option>
                                    </Form.Select>
                                  </Col>
                                  <Col
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    className="ltn__car-dealer-form-item ltn__custom-icon"
                                  >
                                    <span className="inline-icon">
                                      <FaCarAlt />
                                    </span>
                                    <Form.Select className="nice-select">
                                      <option>Property Status</option>
                                      <option value="1">Open house</option>
                                      <option value="2">Rent</option>
                                      <option value="3">Sale</option>
                                      <option value="4">Sold</option>
                                    </Form.Select>
                                  </Col>
                                  <Col
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    className="ltn__car-dealer-form-item ltn__custom-icon"
                                  >
                                    <span className="inline-icon">
                                      <FaCookie />
                                    </span>
                                    <Form.Select className="nice-select">
                                      <option>Property Type</option>
                                      <option value="1">Apartment</option>
                                      <option value="2">Co-op</option>
                                      <option value="3">Condo</option>
                                      <option value="4">
                                        Single Family Home
                                      </option>
                                    </Form.Select>
                                  </Col>
                                  <Col
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar"
                                  >
                                    <div className="btn-wrapper text-center mt-0">
                                      <Link
                                        href="/shop/right-sidebar"
                                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                      >
                                        Search
                                      </Link>
                                    </div>
                                  </Col>
                                </form>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <div className="car-dealer-form-inner">
                                <form
                                  action="#"
                                  className="ltn__car-dealer-form-box row mb--30"
                                >
                                  <Col
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    className="ltn__car-dealer-form-item ltn__custom-icon"
                                  >
                                    <span className="inline-icon">
                                      <FaCalendarAlt />
                                    </span>
                                    <Form.Select className="nice-select">
                                      <option>Choose Area</option>
                                      <option value="1">Chicago</option>
                                      <option value="2">London</option>
                                      <option value="3">Los Angeles</option>
                                      <option value="4">New York</option>
                                      <option value="5">New Jersey</option>
                                    </Form.Select>
                                  </Col>
                                  <Col
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    className="ltn__car-dealer-form-item ltn__custom-icon"
                                  >
                                    <span className="inline-icon">
                                      <FaCarAlt />
                                    </span>
                                    <Form.Select className="nice-select">
                                      <option>Property Status</option>
                                      <option value="1">Open house</option>
                                      <option value="2">Rent</option>
                                      <option value="3">Sale</option>
                                      <option value="4">Sold</option>
                                    </Form.Select>
                                  </Col>
                                  <Col
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    className="ltn__car-dealer-form-item ltn__custom-icon"
                                  >
                                    <span className="inline-icon">
                                      <FaCookie />
                                    </span>
                                    <Form.Select className="nice-select">
                                      <option>Property Type</option>
                                      <option value="1">Apartment</option>
                                      <option value="2">Co-op</option>
                                      <option value="3">Condo</option>
                                      <option value="4">
                                        Single Family Home
                                      </option>
                                    </Form.Select>
                                  </Col>
                                  <Col
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar"
                                  >
                                    <div className="btn-wrapper text-center mt-0">
                                      <Link
                                        href="/shop/right-sidebar"
                                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                      >
                                        Search
                                      </Link>
                                    </div>
                                  </Col>
                                </form>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionStyleSix;
