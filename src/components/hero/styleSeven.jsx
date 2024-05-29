import { Col, Nav, Tab, Form } from "react-bootstrap";
import { FaCalendarAlt, FaCarAlt, FaCookie, FaHome } from "react-icons/fa";
import Link from "next/link";

function HeroSectionStyleSeven({ navMenuClass }) {
  return (
    <>
      <div className="ltn__slider-area ltn__slider-6">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          <div
            className="ltn__slide-item-9 ltn__slide-animation-active section-bg-1 bg-image"
            style={{
              backgroundImage: `url("/img/slider/52.jpg")`,
            }}
          >
            <div className="ltn__slide-item-inner">
              <div className="slide-item-info bg-overlay-white-90 text-center">
                <div className="slide-item-info-inner slide-item-info-line-no ltn__slide-animation">
                  <div className="slide-item-car-dealer-form">
                    <h3 className="text-center mb-30">
                      Find Your{" "}
                      <span className="ltn__secondary-color-3">Perfect</span>{" "}
                      Home
                    </h3>

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

                        <Tab.Content className="tab-content pb-10">
                          <Tab.Pane eventKey="first">
                            <div className="car-dealer-form-inner">
                              <form
                                action="#"
                                className="ltn__car-dealer-form-box row mb--30"
                              >
                                <Col
                                  xs={12}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionStyleSeven;
