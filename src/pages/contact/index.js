import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Contact from "@/components/contact";

function ContactUs() {
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="Contact Us"
          sectionPace=""
          currentSlug="Contact"
        />

        <Contact />

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

export default ContactUs;
