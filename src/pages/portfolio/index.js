import { useState } from 'react'
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts, productSlug } from "@/lib/product";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TitleSection from "@/components/titleSection";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import portfolioData from "@/data/portfolio";
import Portfolioitem from "@/components/portfolio";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CallToAction from "@/components/callToAction";
import brandLogoData from "@/data/brand-logo";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

function Portfolio() {
  const portfolios = getProducts(portfolioData, "buying", "featured", 6);
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
  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
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

  const [basicExampleOpen, setBasicExampleOpen] = useState(false);

  const gallerySlides = portfolios.map((img, i) => ({
    src: `/img/gallery/${img.thumbImage}`,
    key: i,
  }));
  return (


    <>

      <Lightbox
        open={basicExampleOpen}
        close={() => setBasicExampleOpen(false)}
        slides={gallerySlides}
        plugins={[Zoom, Counter, Fullscreen, Download]}
      />
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="Our Portfolio"
          sectionPace=""
          currentSlug="Portfolio"
        />

        {/*  <!-- Gallery area start -->  */}
        <div className="ltn__gallery-area mb-120">
          <Container>
            <div className="row ltn__gallery-active ltn__gallery-style-2">
              {portfolios.map((data, key) => {
                const slug = productSlug(data.title);

                return (
                  <Portfolioitem
                    setBasicExampleOpen={setBasicExampleOpen}
                    key={key}
                    baseUrl="portfolio"
                    data={data}
                    slug={slug}
                  />
                );
              })}
            </div>

            <div className="btn-wrapper text-center">
              <button className="btn btn-transparent btn-effect-3 btn-border">
                LOAD MORE +
              </button>
            </div>
          </Container>
        </div>
        {/*  <!-- Gallery area end --> */}

        <CallToActionstyleTwo />

        {/* <!-- BLOG AREA START (blog-3) -->  */}
        <div className="ltn__blog-area pt-120 pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
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
                  <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- BLOG AREA END --> */}

        {/* <!-- BRAND LOGO AREA START --> */}
        <div className="ltn__brand-logo-area ltn__brand-logo-1 pt-80--- pb-110 plr--9">
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

export default Portfolio;
