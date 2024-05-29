import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaSearch,
  FaRegEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";

import ShopBreadCrumb from "@/components/breadCrumbs/shop";

import CallToAction from "@/components/callToAction";
import Link from "next/link";

function Register() {
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Register" />

        {/* <!-- LOGIN AREA START (Register) --> */}
        <div className="ltn__login-area pb-110">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Register <br />
                    Your Account
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <div className="account-login-inner">
                  <form action="#" className="ltn__form-box contact-form-box">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                    <input type="text" name="email" placeholder="Email*" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                    />
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password*"
                    />
                    <label className="checkbox-inline">
                      <input type="checkbox" value="" />I consent to Herboil
                      processing my personal data in order to send personalized
                      marketing material in accordance with the consent form and
                      the privacy policy.
                    </label>
                    <label className="checkbox-inline">
                      <input type="checkbox" value="" />
                      By clicking create account, I consent to the privacy
                      policy.
                    </label>
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <Link href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </Link>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link href="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- LOGIN AREA END --> */}

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

export default Register;
