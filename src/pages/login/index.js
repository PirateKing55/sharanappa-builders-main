import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Link from "next/link";

function Login() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Login" />

        {/* <!-- LOGIN AREA START --> */}
        <div className="ltn__login-area pb-65">
          <div className="container">
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">Sign In <br />To  Your Account</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                    Sit aliquid,  Non distinctio vel iste.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <div className="account-login-inner ltn__form-box contact-form-box">
                  <form action="#">
                    <input type="text" name="email" placeholder="Email*" />
                    <input type="password" name="password" placeholder="Password*" />
                    <div className="btn-wrapper mt-0">
                      <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                    </div>
                  </form>
                  <div className="go-to-btn mt-20">
                    <button onClick={handleShow}><small>FORGOTTEN YOUR PASSWORD?</small></button>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="account-create text-center pt-50">
                  <h4>{`DON'T HAVE AN ACCOUNT?`}</h4>
                  <p>Add items to your wishlistget personalised recommendations <br />
                    check out more quickly track your orders register</p>
                  <div className="btn-wrapper">
                    <Link href="/register" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
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


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        className="ltn__modal-area"
      >
        <Modal.Header>
          <Button
            onClick={handleClose}
            className="close"
            variant="secondary"

          >
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>

        <Modal.Body>
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                <div className="col-12">
                  <div className="modal-product-info text-center">
                    <h4>FORGET PASSWORD?</h4>
                    <p className="added-cart"> Enter you register email.</p>
                    <form action="#" class="ltn__form-box">
                      <input type="text" name="email" placeholder="Type your register email*" />
                      <div className="btn-wrapper mt-0">
                        <button className="theme-btn-1 btn btn-full-width-2" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
