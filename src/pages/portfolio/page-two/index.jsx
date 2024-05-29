import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import portfolioData from "@/data/portfolio/index.json";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CallToAction from "@/components/callToAction";
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import brandLogoData from "@/data/brand-logo";
import { getProducts, productSlug } from "@/lib/product";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TitleSection from "@/components/titleSection";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { LayoutOne } from "@/layouts";

function PortFolioPageTwo() {
  const portfolios = getProducts(portfolioData, "buying", "featured", 12);

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const filterButtons = document.querySelectorAll(".portfolio-filter button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });
  }, [data]);

  useEffect(() => {
    setData(portfolios);
    setCollection([...new Set(portfolios.map((item) => item.filter))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = portfolios.filter((item) => item.filter == itemData);
    setData(filterData);
  };

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
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
        <div className="ltn__gallery-area mb-120">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="ltn__gallery-menu">
                  <div className="ltn__gallery-filter-menu portfolio-filter text-uppercase mb-50">
                    <button
                      onClick={() => setData(portfolios)}
                      className="active"
                    >
                      All
                    </button>
                    {collection.map((item, key) => (
                      <button
                        key={key}
                        onClick={() => {
                          gallery_filter(item);
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="ltn__gallery-active ltn__gallery-style-1">
              <AnimatePresence>
                {data.map((item) => {
                  const slug = productSlug(item.title);
                  return (
                    <motion.div
                      key={item.id}
                      className="ltn__gallery-item col-md-4 col-sm-6 col-12"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="ltn__gallery-item-inner">
                        <div
                          className="ltn__gallery-item-img"
                          onClick={() => setBasicExampleOpen(true)}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <img src={`/img/gallery/${item.img}`} alt="Image" />
                          <span className="ltn__gallery-action-icon">
                            <span>
                              <FaSearch />
                            </span>
                          </span>
                        </div>
                        <div className="ltn__gallery-item-info">
                          <h4>
                            <Link href={`${slug}`}>{item.title}</Link>
                          </h4>
                          <p>Web Design &amp; Development, Branding</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </Row>

            <div className="btn-wrapper text-center">
              <Link
                href="#"
                className="btn btn-transparent btn-effect-1 btn-border"
              >
                LOAD MORE +
              </Link>
            </div>
          </Container>
        </div>

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

export default PortFolioPageTwo;
