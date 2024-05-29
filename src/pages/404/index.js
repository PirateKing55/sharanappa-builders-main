import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

const comingSoon = () => {
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="404 Page" sectionPace="" currentSlug="404" />

        {/* <!-- 404 area start --> */}
        <div className="ltn__404-area ltn__404-area-1 mb-120">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="error-404-inner text-center">
                  <div className="error-img mb-30">
                    <img src="/img/others/error-1.png" alt="#" />
                  </div>
                  <h1 className="error-404-title d-none">404</h1>
                  <h2>Page Not Found!</h2>
                  {/* <!-- <h3>Oops! Looks like something going rong</h3> --> */}
                  <p>
                    Oops! The page you are looking for does not exist. It might
                    have been moved or deleted.
                  </p>
                  <div className="btn-wrapper">
                    <Link href="/" className="btn btn-transparent">
                      {" "}
                      <span>
                        <FaLongArrowAltLeft />
                      </span>{" "}
                      BACK TO HOME
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- 404 area end --> */}

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

export default comingSoon;
