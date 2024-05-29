import Link from "next/link";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import { FaPencilAlt, } from "react-icons/fa";


function AddListingPage() {


  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="Add Listing" sectionPace="" currentSlug="Add Listing" />
        {/* // <!-- APPOINTMENT AREA START --> */}
        <div className="ltn__appointment-area pb-120">
          <Container>
            <Row>
              <Col xs={12}>
                <form action="#">
                  <Tab.Container defaultActiveKey="first">
                    <div className="ltn__tab-menu ltn__tab-menu-3 text-center">
                      <Nav className="nav justify-content-center">
                        <Nav.Link eventKey="first">1. Description</Nav.Link>
                        <Nav.Link eventKey="second">2. Media</Nav.Link>
                        <Nav.Link eventKey="third">3. Location</Nav.Link>
                        <Nav.Link eventKey="fourth">4. Details</Nav.Link>
                        <Nav.Link eventKey="five">5. Amenities</Nav.Link>
                      </Nav>
                    </div>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="ltn__apartments-tab-content-inner">
                          <h6>Property Description</h6>
                          <Row>
                            <div className="col-md-12">
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="*Title (mandatory)"
                                />
                              </div>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <textarea
                                  name="ltn__message"
                                  placeholder="Description"
                                ></textarea>
                              </div>
                            </div>
                          </Row>
                          <h6>Property Price</h6>
                          <Row>
                            <Col xs={12} md={6}>
                              <div className="input-item  input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Price in $ (only numbers)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="After Price Label (ex: /month)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Before Price Label (ex: from)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Yearly Tax Rate"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Homeowners Association Fee(monthly)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                          </Row>
                          <h6>Select Categories</h6>
                          <Row>
                            <Col xs={12} md={6} lg={4}>
                              <div className="input-item ltn__custom-icon">
                                <Form.Select className="nice-select">
                                  <option>Make A Selection</option>
                                  <option value="1">New York</option>
                                  <option value="2">South Carolina</option>
                                  <option value="3">Los Angeles</option>
                                  <option value="4">Florida</option>
                                  <option value="5">New Jersey</option>
                                </Form.Select>

                              </div>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <div className="input-item ltn__custom-icon">
                                <Form.Select className="nice-select">
                                  <option>Make A Selection</option>
                                  <option value="1">New York</option>
                                  <option value="2">South Carolina</option>
                                  <option value="3">Los Angeles</option>
                                  <option value="4">Florida</option>
                                  <option value="5">New Jersey</option>
                                </Form.Select>
                              </div>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <div className="input-item ltn__custom-icon">
                                <Form.Select className="nice-select">
                                  <option>Make A Selection</option>
                                  <option value="1">New York</option>
                                  <option value="2">South Carolina</option>
                                  <option value="3">Los Angeles</option>
                                  <option value="4">Florida</option>
                                  <option value="5">New Jersey</option>
                                </Form.Select>
                              </div>
                            </Col>
                          </Row>
                          <div className="btn-wrapper  mt-0">
                            <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase" >Next Step</button>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="ltn__product-tab-content-inner">
                          <h6>Listing Media</h6>
                          <input
                            type="file"
                            id="myFile"
                            name="filename"
                            className="btn theme-btn-3 mb-10"
                          />
                          <br />
                          <p>
                            <small>
                              * At least 1 image is required for a valid
                              submission.Minimum size is 500/500px.
                            </small>
                            <br />
                            <small>* PDF files upload supported as well.</small>
                            <br />
                            <small>
                              * Images might take longer to be processed.
                            </small>
                          </p>
                          <h6>Video Option</h6>
                          <Row>
                            <Col xs={12} md={6}>
                              <div className="input-item ltn__custom-icon">
                                <Form.Select className="nice-select">
                                  <option>Make A Selection</option>
                                  <option value="1">New York</option>
                                  <option value="2">South Carolina</option>
                                  <option value="3">Los Angeles</option>
                                  <option value="4">Florida</option>
                                  <option value="5">New Jersey</option>
                                </Form.Select>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Embed Video ID"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                          </Row>
                          <h6>Virtual Tour</h6>
                          <div className="input-item input-item-textarea ltn__custom-icon">
                            <textarea
                              name="ltn__message"
                              placeholder="Virtual Tour:"
                            ></textarea>
                            <span className="inline-icon">
                              <FaPencilAlt />
                            </span>
                          </div>
                          <div className="btn-wrapper  mt-0">
                            {/* <!-- <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase" >Next Step</button> --> */}
                            <Link
                              href="#"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Prev Step
                            </Link>
                            <Link
                              href="#"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Next Step
                            </Link>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="ltn__product-tab-content-inner">
                          <h6>Listing Location</h6>
                          <Row>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="*Address"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Country"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="County / State"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="City"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Neighborhood"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Zip" />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>

                            <Col xs={12}>
                              <div className="property-details-google-map mb-60">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"></iframe>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Latitude (for Google Maps)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Longitude (for Google Maps)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <label className="checkbox-item">
                                Enable Google Street View
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Google Street View - Camera Angle (value from 0 to 360)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>

                          </Row>

                        </div>

                        <div className="btn-wrapper  mt-0">
                          {/* <!-- <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase" >Next Step</button> --> */}
                          <Link
                            href="#"
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                          >
                            Prev Step
                          </Link>
                          <Link
                            href="#"
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                          >
                            Next Step
                          </Link>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="fourth">
                        <div className="ltn__product-tab-content-inner">
                          <h6>Listing Details</h6>
                          <Row>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Size in ft2 (*only numbers)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Lot Size in ft2 (*only numbers)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Rooms (*only numbers)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Bedrooms (*only numbers)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Bathrooms (*only numbers)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Custom ID (*text)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Garages (*text)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Year Built (*numeric)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Garage Size (*text)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Available from (*date)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Basement (*text)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Extra Details (*text)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Roofing (*text)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Exterior Material (*text)"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item ltn__custom-icon">
                                <Form.Select className="nice-select">
                                  <option>Make A Selection</option>
                                  <option value="1">New York</option>
                                  <option value="2">South Carolina</option>
                                  <option value="3">Los Angeles</option>
                                  <option value="4">Florida</option>
                                  <option value="5">New Jersey</option>
                                </Form.Select>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item ltn__custom-icon">
                                <Form.Select className="nice-select">
                                  <option>Make A Selection</option>
                                  <option value="1">New York</option>
                                  <option value="2">South Carolina</option>
                                  <option value="3">Los Angeles</option>
                                  <option value="4">Florida</option>
                                  <option value="5">New Jersey</option>
                                </Form.Select>
                              </div>
                            </Col>
                            <div className="col-lg-12">
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <textarea
                                  name="ltn__message"
                                  placeholder="Owner/Agent notes (*not visible on front end)"
                                ></textarea>
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </div>
                          </Row>
                          <h6>Select Energy Class</h6>
                          <Row>
                            <Col xs={12} md={6}>
                              <div className="input-item ltn__custom-icon">
                                <Form.Select className="nice-select">
                                  <option>Make A Selection</option>
                                  <option value="1">New York</option>
                                  <option value="2">South Carolina</option>
                                  <option value="3">Los Angeles</option>
                                  <option value="4">Florida</option>
                                  <option value="5">New Jersey</option>
                                </Form.Select>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <input
                                  type="text"
                                  name="ltn__name"
                                  placeholder="Energy Index in kWh/m2a"
                                />
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                            </Col>
                          </Row>
                          <div className="btn-wrapper  mt-0">
                            {/* <!-- <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase" >Next Step</button> --> */}
                            <Link
                              href="#"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Prev Step
                            </Link>
                            <Link
                              href="#"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Next Step
                            </Link>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="five">
                        <div className="ltn__product-tab-content-inner">
                          <h6>Amenities and Features</h6>
                          <h6>Interior Details</h6>
                          <Row>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Equipped Kitchen
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Gym
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Laundry
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Media Room
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                          </Row>
                          <h6 className="mt-20">Outdoor Details</h6>
                          <Row>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Back yard
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Basketball court
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Front yard
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Garage Attached
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Hot Bath
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Pool
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                          </Row>
                          <h6 className="mt-20">Utilities</h6>
                          <Row>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Central Air
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Electricity
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Heating
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Natural Gas
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Ventilation
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Water
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                          </Row>
                          <h6 className="mt-20">Other Features</h6>
                          <Row>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Chair Accessible
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Elevator
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Fireplace
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Smoke detectors
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                Washer and dryer
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                              <label className="checkbox-item">
                                WiFi
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </Col>
                          </Row>
                          <div className="alert alert-warning d-none" role="alert">
                            Please note that the date and time you requested may not
                            be available. We will contact you to confirm your actual
                            appointment details.
                          </div>
                          <div className="btn-wrapper  mt-30">
                            <Link
                              href="#"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Prev Step
                            </Link>
                            <button
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                              type="submit"
                            >
                              Submit Property
                            </button>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
        {/* // <!-- APPOINTMENT AREA END --> */}
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

export default AddListingPage;