import { useState } from "react";
import Slider from "react-slick";
import path from "path";
import fs from "fs/promises";
import { LayoutTwo } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import Feature from "@/components/features";
import featuresData from "@/data/service";
import HeroSectionStyleThree from "@/components/hero/styleThree";
import PropertyItem from "@/components/product/properties";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import VideoBanner from "@/components/banner/videoBanner";
import ProductItem from "@/components/product";
import CarDealerSearchForm from "@/components/carDealerSearchForm";
import BrandCarouselOne from "@/components/brandCarousel";
import TestimonialStyleThree from "@/components/testimonialCarousel/indexThree";



function HomeVersionThree(props) {
  const [isOpen, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const countryProducts = getProducts(products, "buying", "country", 5);
  const featuredProducts = getProducts(products, "buying", "featured", 5);
  const { data, brand, testimonialData } = props;

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

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


  const productCarouselsettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
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
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: true,
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
    <LayoutTwo topbar={true}>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="LjCzPp-MK48"
        onClose={() => setOpen(false)}
      />
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <div className="ltn__slider-area ltn__slider-3 section-bg-2">
        <HeroSectionStyleThree data={data} />
      </div>

      {/* <!-- SLIDER AREA END --> */}
      <CarDealerSearchForm navMenuClass="d-none" customClasses="" />
      {/* <!-- CAR DEALER FORM AREA END --> */}


      {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
      <Feature
        servicebtn={true}
        iconTag={false}
        data={featureData}
        classes=""
        headingClasses="section-subtitle-2"
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />
      {/* <!-- FEATURE AREA END -->

    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      <div
        className="ltn__search-by-place-area section-bg-1 pt-115 pb-70"


      >
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Area Properties",
                  title: "Properties By Location",
                }}
              />
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



      {/* PRODUCT SLIDER AREA START */}
      <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Properties",
                  title: "Featured Listings",
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              {!!featuredProducts?.length ? (
                <Slider
                  {...productCarouselsettings}
                  className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
                >
                  {featuredProducts.map((product, key) => {
                    const slug = productSlug(product.title);

                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);
                    const productPrice = product.price.toFixed(2);
                    const cartItem = cartItems.find(
                      (cartItem) => cartItem.id === product.id
                    );
                    const wishlistItem = wishlistItems.find(
                      (wishlistItem) => wishlistItem.id === product.id
                    );
                    const compareItem = compareItems.find(
                      (compareItem) => compareItem.id === product.id
                    );

                    return (
                      <ProductItem
                        key={product.id}
                        productData={product}
                        slug={slug}
                        baseUrl="shop"
                        discountedPrice={discountedPrice}
                        productPrice={productPrice}
                        cartItem={cartItem}
                        wishlistItem={wishlistItem}
                        compareItem={compareItem}
                      />
                    );
                  })}
                </Slider>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
      {/* PRODUCT SLIDER AREA END */}


      {/* <!-- VIDEO AREA START --> */}
      <div className="ltn__video-popup-area">
        <VideoBanner />
      </div>
      {/* <!-- VIDEO AREA END --> */}



      {/* <!-- TESTIMONIAL AREA START --> */}
      <div className="ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Our Testimonial",
                  title: "Clients Feedback",
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <TestimonialStyleThree data={testimonialData} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- TESTIMONIAL AREA END --> */}



      {/* <!-- BRAND LOGO AREA START --> */}
      <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-110 pb-110 plr--9">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <BrandCarouselOne data={brand} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- BRAND LOGO AREA END --> */}



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
                <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
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
    </LayoutTwo>
  );
}

export async function getStaticProps() {

  const filePath = path.join(process.cwd(), "src/data/hero/", "index-three.json");

  const brandfilePath = path.join(process.cwd(), "src/data/brand-logo/", "index.json");

  const testimonialFilePath = path.join(process.cwd(), "src/data/testimonial/", "index-three.json");

  const data = JSON.parse(await fs.readFile(filePath));
  const brand = JSON.parse(await fs.readFile(brandfilePath));
  const testimonialData = JSON.parse(await fs.readFile(testimonialFilePath));

  return {
    props: {
      data,
      brand,
      testimonialData
    },
  };
}
export default HomeVersionThree;
