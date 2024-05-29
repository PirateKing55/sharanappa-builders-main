import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Countdown from "./countdown";

const CountdownOne = ({ title, subtitle, backgroundImage, dateTime, url }) => {
  return (
    <div
      className="countdown-area bg-img space-pt--r100 space-pb--r100 space-mb--r100"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <Container>
        <Row>
          <Col xl={6} lg={8} md={10}>
            <div className="furniture-banner">
              <h3 className="single-bn-title">{subtitle}</h3>
              <h4 className="single-bn-title-one">{title}</h4>
              <Countdown date={dateTime} className="countdown-two space-mb--20" />
              <Link href={url} className="btn btn-fill-out">
                Shop Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountdownOne;
