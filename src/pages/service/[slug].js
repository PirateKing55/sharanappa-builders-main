import Link from "next/link";
import { FaArrowRight, FaSearch, FaRegEnvelopeOpen } from "react-icons/fa";
import serviceData from "@/data/service";
import { LayoutOne } from "@/layouts";
import { productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

function ServiceDetails({ service }) {
  const firstLetter = service.shortDescription.slice(0, 1);
  const firstToEnd = service.shortDescription.slice(1);

  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title="Service Details"
          sectionPace=""
          currentSlug="Property Management"
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- PAGE DETAILS AREA START (service-details) --> */}
        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <div className="ltn__blog-img">
                    <img
                      src={`/img/service/${service.thumbImage}`}
                      alt="Image"
                    />
                  </div>
                  <p className="overflow-hidden">
                    <span className="ltn__first-letter">{firstLetter}</span>
                    {firstToEnd}
                  </p>
                  <p>{service.fullDescription}</p>
                  <Row>
                    <Col xs={12} lg={6}>
                      <img
                        src={`/img/service/${service.captions.image1}`}
                        alt="image"
                      />
                      <label>{service.captions.caption}</label>
                    </Col>
                    <Col xs={12} lg={6}>
                      <img
                        src={`/img/service/${service.captions.image2}`}
                        alt="image"
                      />
                    </Col>
                  </Row>
                  <p>{service.captions.captionFullDescription}</p>
                  <p>{service.captions.captionShortDescription}</p>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <aside className="sidebar-area ltn__right-sidebar">
                  {/* <!-- Menu Widget --> */}
                  <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                    <ul>
                      <li>
                        <Link href="#">
                          Property Management
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="#">
                          Mortgage Service
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Consulting Service
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Home Buying
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Home selling
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Escrow Services
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Newsletter Widget --> */}
                  <div className="widget ltn__search-widget ltn__newsletter-widget">
                    <h6 className="ltn__widget-sub-title">{`// subscribe`}</h6>
                    <h4 className="ltn__widget-title">Get Newsletter</h4>
                    <form action="#">
                      <input type="text" name="search" placeholder="Search" />
                      <button type="submit">
                        <FaSearch />
                      </button>
                    </form>
                    <div className="ltn__newsletter-bg-icon">
                      <FaRegEnvelopeOpen />
                    </div>
                  </div>
                  {/* <!-- Banner Widget --> */}
                  <div className="widget ltn__banner-widget">
                    <Link href="/shop">
                      <img src="/img/banner/banner-1.jpg" alt="Banner Image" />
                    </Link>
                  </div>
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- PAGE DETAILS AREA END --> */}

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

export default ServiceDetails;

export async function getStaticProps({ params }) {
  // get blog data based on slug
  const service = serviceData.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { service } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on blogs
  const paths = serviceData.map((data) => ({
    params: {
      slug: productSlug(data.title, {
        lower: true, // convert to lower case, defaults to `false`
      }),
    },
  }));

  return { paths, fallback: false };
}
