import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const PropertyCategories = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={6} lg={8}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/2.jpg")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> Apartments </Link>
              </h3>
              <p> Great Deals Available</p>
              <mark> 13 Listings</mark>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/3.jpg")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> Condos </Link>
              </h3>
              <p> Great Deals Available</p>
              <mark> 13 Listings</mark>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/7.jpg")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> Houses </Link>
              </h3>
              <p> Great Deals Available</p>
              <mark> 13 Listings</mark>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/8.jpg")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> Retail </Link>
              </h3>
              <p> Great Deals Available</p>
              <mark> 13 Listings</mark>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
            style={{
              backgroundImage: `url("/img/gallery/9.jpg")`,
            }}
          >
            <div className="ltn__banner-info">
              <h3>
                <Link href="/shop"> Villas </Link>
              </h3>
              <p> Great Deals Available</p>
              <mark> 13 Listings</mark>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PropertyCategories;
