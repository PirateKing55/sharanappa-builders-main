import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  FaMapMarkedAlt,
  FaPhoneVolume,
  FaLocationArrow,
  FaGlobe,
} from "react-icons/fa";

import ShopBreadCrumb from "@/components/breadCrumbs/shop";

import CallToAction from "@/components/callToAction";

import Link from "next/link";

function Locations() {
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="Google Map Locations"
          sectionPace="mb-0"
          currentSlug="Locations"
        />

        {/* <!-- GOOGLE MAP LOCATIONS AREA START --> */}
        <div className="ltn__google-map-locations-area">
          <div id="gmap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
        {/* <!-- GOOGLE MAP LOCATIONS AREA END --> */}


        {/* <!-- GOOGLE MAP LOCATIONS LIST AREA START --> */}
        <div className="ltn__google-map-locations-list-area mt-115 mb-70">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="ltn__location-search mb-100">
                  <div className="section-title-area ltn__section-title-2 ">
                    <h1 className="section-title">
                      Find your nearby location<span>.</span>
                    </h1>
                  </div>
                  <form action="#" className="clearfix">
                    <h3>Your State</h3>
                    <div className="input-item">
                      <Form.Select className="nice-select">
                        <option>Make A Selection</option>
                        <option value="1">New York</option>
                        <option value="2">South Carolina</option>
                        <option value="3">Los Angeles</option>
                        <option value="4">Florida</option>
                        <option value="5">New Jersey</option>
                      </Form.Select>
                    </div>
                  </form>
                </div>
              </Col>
              <Col xs={12}>
                <div className="ltn__state-location">
                  <h2 className="ltn__state-location-title">Alabama</h2>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>

              <Col xs={12}>
                <div className="ltn__state-location">
                  <h2 className="ltn__state-location-title">Boston</h2>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>

              <Col xs={12}>
                <div className="ltn__state-location">
                  <h2 className="ltn__state-location-title">New York</h2>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="ltn__map-item">
                  <h3 className="ltn__location-name">Boston, New York</h3>
                  <h5 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaMapMarkedAlt />
                    </span>
                    5816 S. Coulter Street Amarillo, <br /> TX 79119
                  </h5>
                  <h4 className="ltn__location-single-info">
                    <span className="me-2">
                      <FaPhoneVolume />
                    </span>
                    0123456789
                  </h4>
                  <div className="btn-wrapper">
                    <Link
                      href="/appointment"
                      className="btn btn-transparent btn-border btn-effect-4"
                    >
                      <span className="me-2">
                        <FaLocationArrow />
                      </span>
                      Get An Appointment
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-transparent btn-border btn-effect-3"
                    >
                      <span className="me-2">
                        <FaGlobe />
                      </span>
                      View Website
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- GOOGLE MAP LOCATIONS LIST AREA END --> */}

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Locations;
