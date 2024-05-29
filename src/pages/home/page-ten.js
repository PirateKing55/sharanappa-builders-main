import { useState } from "react";
import Slider from "react-slick";
import { LayoutSix } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import UpCommingcarousel from "@/components/upCommingCarousel";
import PropertyItem from "@/components/product/properties";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import AminitiesItemTwo from "@/components/aminities/itemTwo";
import aminitiesData from "@/data/aminities/index.json";
import TestimonialCarouselItemTwo from "@/components/testimonialCarousel/indexTwo";
import testimonialData from "@/data/testimonial";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import GooglePlaceMap from '@/components/googleMap';
import CarDealerSearchFormTwo from "@/components/carDealerSearchForm/indexTwo";


function HomeVersionTen(props) {
  const [isOpen, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);
  const countryProducts = getProducts(products, "buying", "country", 5);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testiMonialsettings = {
    arrows: true,
    dots: false,
    centerMode: false,
    centerPadding: '80px',
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LayoutSix topbar={true}>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="LjCzPp-MK48"
        onClose={() => setOpen(false)}
      />
      <div className="ltn__google-map-locations-area">
        <div id="gmap">
          <GooglePlaceMap />
        </div>
      </div>


      {/* CAR DEALER FORM AREA START */}
      <div className="ltn__car-dealer-form-area mt-120 mb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__car-dealer-form-tab">
              <CarDealerSearchFormTwo />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* CAR DEALER FORM AREA END */}


      {/* <!-- FEATURE AREA END -->

    <!-- UPCOMING PROJECT AREA START --> */}
      <div
        className="ltn__upcoming-project-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/bg/22.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Upcoming Projects
                </h6>
                <h1 className="section-title  white-color">
                  Dream Living Space <br />
                  Setting New Standards
                </h1>
              </div>
            </Col>
          </Row>
          <UpCommingcarousel />

        </Container>
      </div>
      {/* <!-- UPCOMING PROJECT AREA END -->

    <!-- APARTMENTS PLAN AREA START --> */}

      <div className="ltn__apartments-plan-area pb-70">
        <Container>
          <Row>
            <Col>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  subTitle: "Apartment Sketch",
                  title: "Apartments Plan",
                  additionalClassName: "",
                }}
              />

              <Tab.Container defaultActiveKey="first">
                <div className="ltn__tab-menu ltn__tab-menu-3 text-center">
                  <Nav className="nav justify-content-center">
                    <Nav.Link eventKey="first">The Studio</Nav.Link>
                    <Nav.Link eventKey="second">Deluxe Portion</Nav.Link>
                    <Nav.Link eventKey="third">Penthouse</Nav.Link>
                    <Nav.Link eventKey="fourth">Top Garden</Nav.Link>
                    <Nav.Link eventKey="five"> Double Height</Nav.Link>
                  </Nav>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__apartments-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>The Studio</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="ltn__product-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>Deluxe Portion</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="ltn__product-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>Penthouse</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="ltn__product-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>Top Garden</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="five">
                    <div className="ltn__product-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>Double Height</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- APARTMENTS PLAN AREA END -->

    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      <div
        className="ltn__search-by-place-area before-bg-top pt-115 pb-70"


      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Area Properties
                </h6>
                <h1 className="section-title">
                  Find Your Dream House <br />
                  Search By Area
                </h1>
              </div>
            </Col>
          </Row>

          {!!countryProducts?.length ? (
            <Slider
              {...productsettings}
              className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
            >
              {countryProducts.map((product, key) => {
                const slug = productSlug(product.title);

                return (
                  <PropertyItem
                    key={key}
                    product={product}
                    slug={slug}
                    baseUrl="/shop"
                  />
                );
              })}
            </Slider>
          ) : null}




        </Container>
      </div>
      {/* <!-- SEARCH BY PLACE AREA END -->

    <!-- SELECT AVAILABILITY AREA START --> */}
      <div className="select-availability-area pb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Avialable Spaces
                </h6>
                <h1 className="section-title">Select Availability</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="ltn__select-availability-table-wrap">
                <div className="ltn__select-availability-table d-none d-md-block">
                  <ul className="ltn__select-availability-table-head">
                    <li>Residence</li>
                    <li>Bedrooms</li>
                    <li>Bathroom</li>
                    <li>SQ.FT </li>
                    <li>Rent Price</li>
                    <li>Details</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                </div>
                <div className="ltn__select-availability-table-responsive d-md-none">
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- SELECT AVAILABILITY AREA END -->

    <!-- NEIGHBOUR AREA START --> */}
      <div className="neighbour-area section-bg-1 pt-118 pb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Explore Neighbour
                </h6>
                <h1 className="section-title">
                  What’s In Neighbour <br />
                  Explore Below
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="ltn__neighbour-tab-wrap">

                <Tab.Container defaultActiveKey="first">
                  <div className="ltn__tab-menu ltn__tab-menu-4 text-center">
                    <Nav>
                      <Nav.Link eventKey="first"> <img src="/img/neighbour/1.jpg" alt="#" /></Nav.Link>
                      <Nav.Link eventKey="second"> <img src="/img/neighbour/2.jpg" alt="#" /></Nav.Link>
                      <Nav.Link eventKey="third"><img src="/img/neighbour/3.jpg" alt="#" /></Nav.Link>
                    </Nav>

                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/1.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/3.jpg" alt="#" />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Shopping Center</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/2.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/2.jpg" alt="#" />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Medical Hospital</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/3.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/4.jpg" alt="#" />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Children Playland</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                <Row>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-mortarboard"></i> University /
                          College
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title"><i className="flaticon-hospital"></i> Medical Hospital</Accordion.Header>
                        <Accordion.Body>
                          <div className="ltn__video-img alignleft">
                            <img
                              src="/img/bg/17.jpg"
                              alt="video popup bg image"
                            />
                            <button
                              className="ltn__video-icon-2 ltn__video-icon-2-small"
                              onClick={() => setOpen(true)}
                            >
                              <FaPlay />
                            </button>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-metro"></i> Railway Station
                        </Accordion.Header>
                        <Accordion.Body className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-building"></i> Shopping Mall
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-airplane"></i> Airport/Biman
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-slider"></i> Children Playland
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- NEIGHBOUR AREA END -->

    <!-- CATEGORY AREA START --> */}
      <div className="ltn__category-area ltn__product-gutter pt-115 pb-70">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  subTitle: "Our Aminities",
                  title: "Building Aminities",
                  additionalClassName: "",
                }}
              />
            </Col>
          </Row>

          <Row className="slick-arrow-1 justify-content-center">
            {aminitiesData.map((data, key) => {
              return (
                <Col key={key} xs={12} sm={6} md={4} lg={3}>
                  <AminitiesItemTwo data={data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      {/* <!-- CATEGORY AREA END -->


    <!-- TESTIMONIAL AREA START (testimonial-8) --> */}
      <div
        className="ltn__testimonial-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/bg/23.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Client,s Testimonial
                </h6>
                <h1 className="section-title white-color">
                  See What,s Our Client <br />
                  Says About Us
                </h1>
              </div>
            </Col>
          </Row>
          <Slider
            {...testiMonialsettings}
            className="row ltn__testimonial-slider-6-active slick-arrow-3"
          >
            {testimonialData.map((data, key) => {
              return <Col xs={12} lg={4} key={key}><TestimonialCarouselItemTwo data={data} /></Col>;
            })}

            {/* <!--  --> */}
          </Slider>
        </Container>
      </div>
      {/* <!-- TESTIMONIAL AREA END -->

    <!-- BLOG AREA START (blog-3) --> */}
      <div className="ltn__blog-area pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  subTitle: "News & Blogs",
                  title: "Leatest News Feeds",
                }}
              />
            </Col>
          </Row>
          <Slider
            {...blogSettings}
            className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
          >
            {blogData.map((data, key) => {
              const slug = productSlug(data.title);
              return (
                <BlogItem key={key} baseUrl="/blog" data={data} slug={slug} />
              );
            })}
          </Slider>
        </Container>
      </div>
      {/* <!-- BLOG AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- CALL TO ACTION END --> */}
    </LayoutSix>
  );
}

export default HomeVersionTen;
