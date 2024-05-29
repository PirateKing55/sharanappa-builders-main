import { useState } from "react";
import Slider from "react-slick";
import { LayoutThree } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import featuresData from "@/data/service";
import HeroSectionStyleFour from "@/components/hero/styleFour";
import { FaArrowLeft, FaArrowRight, FaPlay, FaRegComments } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import CarDealerSearchForm from "@/components/carDealerSearchForm";
import PropertyCategories from "@/components/PropertyCategories";
import ServiceItemTwo from "@/components/service/serviceItemTwo";
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import brandLogoData from "@/data/brand-logo/indexTwo.json";
import testimonialReviews from "@/data/testimonial/reviews.json";
import portfolioData from "@/data/portfolio";
import PortfolioitemThree from "@/components/portfolio/itemThree";

function HomeVersionFour(props) {
  const portfolios = getProducts(portfolioData, "buying", "carousel", 5);
  const [isOpen, setOpen] = useState(false);
  const coreFeatureData = getProducts(featuresData, "buying", "coreFeature", 4);

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

  const testimonialSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
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


  const portfolioSettings = {
    rtl: false,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const LogoSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };



  return (
    <LayoutThree topbar={true}>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <HeroSectionStyleFour />
      {/* <!-- SLIDER AREA END --> */}
      <CarDealerSearchForm navMenuClass="d-none" customClasses="home-four-cardealer" />
      {/* <!-- CAR DEALER FORM AREA END --> */}


      {/* <!-- BANNER AREA START ( Banner - 4 ) --> */}
      <div className="ltn__banner-area pt-120">
        <Container>

          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2 ltn__secondary-color"
                titleSectionData={{
                  subTitle: "Property",
                  title: "Property By Categories",
                }}
              />
            </Col>
          </Row>


          <PropertyCategories />
        </Container>
      </div>
      {/* <!-- BANNER AREA END --> */}



      {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
      <div className="ltn__feature-area pt-90 pb-90">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2 ltn__secondary-color"
                titleSectionData={{
                  subTitle: "features",
                  title: "Core Features",
                }}
              />
            </Col>
          </Row>
          <Row className="ltn__custom-gutter">

            {coreFeatureData.map((service, key) => {
              const slug = productSlug(service.title);
              return (
                <Col xs={12} sm={6} lg={3} key={key}>
                  <ServiceItemTwo
                    data={service}
                    slug={slug}
                  />
                </Col>
              );
            })}

          </Row>
        </Container>
      </div>
      {/* <!-- FEATURE AREA END --> */}

      {/*  <!-- CALL TO ACTION START (call-to-action-4) --> */}

      <div className="mb-120">
        <CallToActionstyleTwo />
      </div>

      {/* <!-- CALL TO ACTION END --> */}


      {/* <!-- VIDEO AREA START --> */}
      <div className="ltn__video-popup-area ltn__video-popup-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__video-bg-img ltn__video-popup-height-600 bg-image"
                style={{
                  backgroundImage: `url("/img/bg/15.jpg")`,
                }}
              >
                <button
                  onClick={() => setOpen(true)}
                  className="ltn__video-icon-2 ltn__video-icon-2-border border-radius-no ltn__secondary-bg"
                >
                  <FaPlay className="icon-play" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- VIDEO AREA END--> */}


      {/* <!-- BRAND LOGO AREA START --> */}
      <div className="ltn__brand-logo-area ltn__brand-logo-1 bg-image bg-overlay-theme-black-90 pt-290 pb-110 plr--9" style={{
        backgroundImage: `url("/img/bg/7.jpg")`,
      }}>
        <Container fluid>
          <Row className="ltn__brand-logo-active">
            <Col xs={12}>
              <Slider {...LogoSettings}>
                {brandLogoData.map((logo, key) => {
                  return (
                    <div key={key} className="ltn__brand-logo-item">
                      <img
                        src={`/img/brand-logo/${logo.image}`}
                        alt="Brand Logo"
                      />
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- BRAND LOGO AREA END --> */}


      {/* <!-- TESTIMONIAL AREA START (testimonial-3) --> */}
      <div className="ltn__testimonial-area bg-image pt-115 pb-70" style={{
        backgroundImage: `url("/img/bg/8.jpg")`,
      }}>
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses=""
                headingClasses="section-subtitle-2 ltn__secondary-color"
                titleSectionData={{
                  subTitle: "Testimonials",
                  title: "Clients Feedbacks",
                }}
              />
            </Col>
          </Row>

          <Slider
            {...testimonialSettings}
            className="ltn__testimonial-slider-2-active slick-arrow-3"
          >
            {testimonialReviews.map((review, key) => {

              return (

                <div key={key} className="ltn__testimonial-item ltn__testimonial-item-3">
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

              );
            })}
          </Slider>
        </Container>
      </div>
      {/* <!-- TESTIMONIAL AREA END --> */}




      {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
      <div className="ltn__img-slider-area">
        <Slider {...portfolioSettings} className="ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">

          {
            portfolios.map((data, key) => {
              const slug = productSlug(data.title);
              return (
                <PortfolioitemThree key={key}
                  baseUrl="/portfolio"
                  data={data}
                  slug={slug} />
              )
            })
          }

        </Slider>
      </div>
      {/* <!-- IMAGE SLIDER AREA END --> */}





      {/* <!-- BLOG AREA START (blog-3) -->  */}
      <div className="ltn__blog-area pt-120 pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
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
    </LayoutThree>
  );
}


export default HomeVersionFour;
