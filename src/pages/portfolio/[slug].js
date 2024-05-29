import Link from "next/link";
import {
  FaArrowRight,
  FaSearch,
  FaRegEnvelopeOpen,
  FaRegComments,
} from "react-icons/fa";
import portfolioData from "@/data/portfolio";
import { LayoutOne } from "@/layouts";
import { productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

function portfolioDetails({ portfolio }) {
  const firstLetter = portfolio.shortDescription.slice(0, 1);
  const firstToEnd = portfolio.shortDescription.slice(1);

  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title="Portfolio Details"
          sectionPace=""
          currentSlug="Portfolio Details"
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- PAGE DETAILS AREA START (service-details) --> */}
        <div className="ltn__page-details-area ltn__portfolio-details-area mb-105">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__page-details-inner ltn__portfolio-details-inner">
                  <div className="ltn__blog-img">
                    <img
                      src={`/img/service/${portfolio.thumbImage}`}
                      alt="Image"
                    />
                  </div>
                  <p className="overflow-hidden">
                    <span className="ltn__first-letter">{firstLetter}</span>
                    {firstToEnd}
                  </p>

                  <p>{portfolio.fullDescription}</p>

                  <Row>
                    {portfolio.reviews.map((review, key) => {

                      return (
                        <Col key={key} xs={12} lg={6}>
                          <div className="ltn__testimonial-item ltn__testimonial-item-3">
                            <div className="ltn__testimonial-img">
                              <img
                                src={`/img/blog/${review.author.productImage}`}
                                alt="Image"
                              />
                            </div>
                            <div className="ltn__testimoni-info">
                              <p>{review.author.description}</p>
                              <div className="ltn__testimoni-info-inner">
                                <div className="ltn__testimoni-img">
                                  <img
                                    src={`/img/testimonial/${review.author.img}`}
                                    alt="Image"
                                  />
                                </div>
                                <div className="ltn__testimoni-name-designation">
                                  <h4>{review.author.name}</h4>
                                  <h6>{review.author.designation}</h6>
                                </div>
                              </div>
                              <div className="ltn__testimoni-bg-icon">
                                <span>
                                  <FaRegComments />
                                </span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>

                  <p>{portfolio.fullDescription}</p>
                  <Row>
                    <Col xs={12} lg={6}>
                      <img
                        src={`/img/service/${portfolio.captions.image1}`}
                        alt="image"
                      />
                      <label>{portfolio.captions.caption}</label>
                    </Col>
                    <Col xs={12} lg={6}>
                      <img
                        src={`/img/service/${portfolio.captions.image2}`}
                        alt="image"
                      />
                    </Col>
                  </Row>
                  <p>{portfolio.captions.captionFullDescription}</p>
                  <p>{portfolio.captions.captionShortDescription}</p>
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

export default portfolioDetails;

export async function getStaticProps({ params }) {
  // get blog data based on slug
  const portfolio = portfolioData.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { portfolio } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on blogs
  const paths = portfolioData.map((data) => ({
    params: {
      slug: productSlug(data.title),
    },
  }));

  return { paths, fallback: false };
}
