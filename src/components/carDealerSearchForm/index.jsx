import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import { FaCarAlt, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

function CarDealerSearchForm({ navMenuClass, customClasses }) {
  return (
    <>
      <div
        className={`ltn__car-dealer-form-area mt--65 mt-120 ${customClasses}`}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__car-dealer-form-tab">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div
                    className={`ltn__tab-menu text-uppercase ${navMenuClass}`}
                  >
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <FaCarAlt />
                          Find A Car
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <FaUserAlt />
                          Get a Dealer
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>

                  <Tab.Content className="tab-content bg-white box-shadow-1 ltn__border position-relative pb-10">
                    <Tab.Pane eventKey="first">
                      <div className="car-dealer-form-inner">
                        <form action="#" className="ltn__car-dealer-form-box">
                          <Row>
                            <Col
                              xs={12}
                              md={6}
                              lg={3}
                              className="ltn__car-dealer-form-item"
                            >
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
                              className="ltn__car-dealer-form-item"
                            >
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
                              className="ltn__car-dealer-form-item"
                            >
                              <Form.Select className="nice-select">
                                <option>Property Type</option>
                                <option value="1">Apartment</option>
                                <option value="2">Co-op</option>
                                <option value="3">Condo</option>
                                <option value="4">Single Family Home</option>
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
                          </Row>
                        </form>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="car-dealer-form-inner">
                        <form
                          action="/shop/right-sidebar"
                          className="ltn__car-dealer-form-box"
                        >
                          <Row>
                            <div
                              xs={12}
                              md={6}
                              lg={3}
                              className="ltn__car-dealer-form-item"
                            >
                              <Form.Select className="nice-select">
                                <option>Choose Area</option>
                                <option value="1">Chicago</option>
                                <option value="2">London</option>
                                <option value="3">Los Angeles</option>
                                <option value="4">New York</option>
                                <option value="5">New Jersey</option>
                              </Form.Select>
                            </div>
                            <div
                              xs={12}
                              md={6}
                              lg={3}
                              className="ltn__car-dealer-form-item"
                            >
                              <Form.Select className="nice-select">
                                <option>Property Status</option>
                                <option value="1">Open house</option>
                                <option value="2">Rent</option>
                                <option value="3">Sale</option>
                                <option value="4">Sold</option>
                              </Form.Select>
                            </div>
                            <div
                              xs={12}
                              md={6}
                              lg={3}
                              className="ltn__car-dealer-form-item"
                            >
                              <Form.Select className="nice-select">
                                <option>Property Type</option>
                                <option value="1">Apartment</option>
                                <option value="2">Co-op</option>
                                <option value="3">Condo</option>
                                <option value="4">Single Family Home</option>
                              </Form.Select>
                            </div>
                            <div
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
                            </div>
                          </Row>
                        </form>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default CarDealerSearchForm;
