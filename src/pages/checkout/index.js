import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Form } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Collapse from "react-bootstrap/Collapse";
import Accordion from "react-bootstrap/Accordion";
import {
  FaArrowDown,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

const Wishlist = () => {
  const [open, setOpen] = useState(false);
  const [vissible, setVissible] = useState(false);
  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}
        <ShopBreadCrumb
          title="Checkout"
          sectionPace=""
          currentSlug="Checkout"
        />
        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- WISHLIST AREA START --> */}
        <div className="ltn__checkout-area mb-105">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="ltn__checkout-inner">
                  <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                    <h5>
                      Returning customer?
                      <button
                        className="ltn__secondary-color"
                        onClick={() => setOpen(!open)}
                        aria-controls="ltn__returning-customer-login"
                      >
                        Click here to login
                      </button>
                    </h5>

                    <Collapse in={open}>
                      <div
                        id="ltn__returning-customer-login"
                        className="collapse ltn__checkout-single-content-info"
                      >
                        <div className="ltn_coupon-code-form ltn__form-box">
                          <p>Please login your accont.</p>
                          <form action="#">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-item input-item-name ltn__custom-icon">
                                  <input
                                    type="text"
                                    name="ltn__name"
                                    placeholder="Enter your name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-item input-item-email ltn__custom-icon">
                                  <input
                                    type="email"
                                    name="ltn__email"
                                    placeholder="Enter email address"
                                  />
                                </div>
                              </div>
                            </div>
                            <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                              Login
                            </button>
                            <label className="input-info-save mb-0">
                              <input type="checkbox" name="agree" /> Remember me
                            </label>
                            <p className="mt-30">
                              <Link href="/register">Lost your password?</Link>
                            </p>
                          </form>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                    <h5>
                      Have a coupon?
                      <button
                        className="ltn__secondary-color"
                        onClick={() => setVissible(!vissible)}
                        aria-controls="ltn__coupon-code"
                      >
                        Click here to enter your code
                      </button>
                    </h5>

                    <Collapse in={vissible}>
                      <div
                        id="ltn__coupon-code"
                        className="collapse ltn__checkout-single-content-info"
                      >
                        <div className="ltn__coupon-code-form">
                          <p>
                            If you have a coupon code, please apply it below.
                          </p>
                          <form action="#">
                            <input
                              type="text"
                              name="coupon-code"
                              placeholder="Coupon code"
                            />
                            <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                              Apply Coupon
                            </button>
                          </form>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="ltn__checkout-single-content mt-50">
                    <h4 className="title-2">Billing Details</h4>
                    <div className="ltn__checkout-single-content-info">
                      <form action="#">
                        <h6>Personal Information</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__name"
                                placeholder="First name"
                              />
                              <span className="inline-icon">
                                <FaUserAlt />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__lastname"
                                placeholder="Last name"
                              />
                              <span className="inline-icon">
                                <FaUserAlt />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-email ltn__custom-icon">
                              <input
                                type="email"
                                name="ltn__email"
                                placeholder="email address"
                              />
                              <span className="inline-icon">
                                <FaEnvelope />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-phone ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__phone"
                                placeholder="phone number"
                              />
                              <span className="inline-icon">
                                <FaPhoneAlt />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-website ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__company"
                                placeholder="Company name (optional)"
                              />
                              <span className="inline-icon">
                                <FaGlobe />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item input-item-website ltn__custom-icon">
                              <input
                                type="text"
                                name="ltn__phone"
                                placeholder="Company address (optional)"
                              />
                              <span className="inline-icon">
                                <FaGlobe />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <h6>Country</h6>
                            <div className="input-item ltn__custom-icon">
                              <Form.Select className="nice-select">
                                <option>Select Country</option>
                                <option>Australia</option>
                                <option>Canada</option>
                                <option>China</option>
                                <option>Morocco</option>
                                <option>Saudi Arabia</option>
                                <option>United Kingdom (UK)</option>
                                <option>United States (US)</option>
                              </Form.Select>
                              <span className="inline-icon">
                                <FaArrowDown />
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <h6>Address</h6>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-item">
                                  <input
                                    type="text"
                                    placeholder="House number and street name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-item">
                                  <input
                                    type="text"
                                    placeholder="Apartment, suite, unit etc. (optional)"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>Town / City</h6>
                            <div className="input-item">
                              <input type="text" placeholder="City" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>State </h6>
                            <div className="input-item">
                              <input type="text" placeholder="State" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>Zip</h6>
                            <div className="input-item">
                              <input type="text" placeholder="Zip" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <label className="input-info-save mb-0">
                            <input type="checkbox" name="agree" /> Create an
                            account?
                          </label>
                        </p>
                        <h6>Order Notes (optional)</h6>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea
                            name="ltn__message"
                            placeholder="Notes about your order, e.g. special notes for delivery."
                          ></textarea>
                          <span className="inline-icon">
                            <FaPencilAlt />
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="ltn__checkout-payment-method mt-50">
                  <h4 className="title-2">Payment Method</h4>

                  <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header> Check payments</Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Cash on delivery </Accordion.Header>
                      <Accordion.Body>
                        <p>Pay with cash upon delivery.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        PayPal <img src="/img/icons/payment-3.png" alt="#" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Pay via PayPal; you can pay with your credit card if
                          you don’t have a PayPal account.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div className="ltn__payment-note mt-30 mb-30">
                    <p>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                  </div>
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    Place order
                  </button>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="shoping-cart-total mt-50">
                  <h4 className="title-2">Cart Totals</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          3 Rooms Manhattan <strong>× 2</strong>
                        </td>
                        <td>$298.00</td>
                      </tr>
                      <tr>
                        <td>
                          OE Replica Wheels <strong>× 2</strong>
                        </td>
                        <td>$170.00</td>
                      </tr>
                      <tr>
                        <td>
                          Wheel Bearing Retainer <strong>× 2</strong>
                        </td>
                        <td>$150.00</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handing</td>
                        <td>$15.00</td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>$00.00</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>$633.00</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- WISHLIST AREA START --> */}

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
};

export default Wishlist;
