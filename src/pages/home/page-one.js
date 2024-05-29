import path from "path";
import fs from "fs/promises";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import HeroSectionStyleOne from "@/components/hero/styleOne";
import CarDealerSearchForm from "@/components/carDealerSearchForm";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import AboutUsStyleTwo from "@/components/aboutUs/aboutUsStyleTwo";
import CounterUp from "@/components/counterUp";
import Feature from "@/components/features";
import TitleSection from "@/components/titleSection";
import ProductItem from "@/components/product";
import CallToAction from "@/components/callToAction";
import VideoBanner from "@/components/banner/videoBanner";
import aminitiesData from "@/data/aminities/index.json";
import AminitiesItem from "@/components/aminities/item";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import featuresData from "@/data/service";

function HomePage(props) {
    const { products } = useSelector((state) => state.product);
    const featuredProducts = getProducts(products, "buying", "featured", 5);
    const featureData = getProducts(featuresData, "buying", "featured", 3);
    const { Herodata } = props;

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
    const productCarouselsettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1799,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
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

    const testiMonialsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,

        responsive: [
            {
                breakpoint: 992,
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


    const { cartItems } = useSelector((state) => state.cart);
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const { compareItems } = useSelector((state) => state.compare);

    return (
        <>
            <LayoutOne topbar={true}>
                <HeroSectionStyleOne data={Herodata} />

                <CarDealerSearchForm navMenuClass="d-none" customClasses="" />
                {/* <!-- CAR DEALER FORM AREA END -->

      <!-- ABOUT US AREA START --> */}
                <AboutUsStyleOne sectionSpace="pt-120 pb-90" />
                {/* <!-- ABOUT US AREA END -->

      <!-- COUNTER UP AREA START --> */}
                <CounterUp />
                {/* <!-- COUNTER UP AREA END -->

      <!-- ABOUT US AREA START --> */}
                <AboutUsStyleTwo sectionSpace="pt-120 pb-90" />
                {/* <!-- ABOUT US AREA END -->

      <!-- FEATURE AREA START ( Feature - 6) --> */}
                <Feature
                    classes="section-bg-1"
                    servicebtn={true}
                    iconTag={false}
                    data={featureData}
                    headingClasses="section-subtitle-2"
                    titleSectionData={{
                        sectionClasses: "text-center",
                        subTitle: "Our Services",
                        title: "Our Main Focus",
                    }}
                />
                {/* PRODUCT SLIDER AREA START */}
                <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
                    <Container fluid>
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

                <div className="ltn__apartments-plan-area pb-70">
                    <Container>
                        <Row>
                            <Col>
                                <TitleSection
                                    sectionClasses="text-center"
                                    headingClasses="section-subtitle-2"
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
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
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
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
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
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
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
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
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
                                                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
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


                {/* <!-- VIDEO AREA START --> */}
                <div className="ltn__video-popup-area">
                    <VideoBanner />
                </div>
                {/* <!-- VIDEO AREA END --> */}
                {/* <!-- CATEGORY AREA START -->  */}
                <div className="ltn__category-area ltn__product-gutter pt-115 pb-90">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <TitleSection
                                    sectionClasses="text-center"
                                    headingClasses="section-subtitle-2"
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
                                        <AminitiesItem data={data} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
                {/* <!-- CATEGORY AREA END --> */}

                {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
                <div
                    className="ltn__testimonial-area bg-image-top pt-115 pb-70"
                    style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
                >
                    <Container>
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

                        <Slider
                            {...testiMonialsettings}
                            className="ltn__testimonial-slider-5-active slick-arrow-1"
                        >
                            {testimonialData.map((data, key) => {
                                return <TestimonialCarouselItem key={key} data={data} />;
                            })}
                        </Slider>
                    </Container>
                </div>
                {/* <!-- TESTIMONIAL AREA END --> */}

                {/* <!-- BLOG AREA START (blog-3) -->  */}
                <div className="ltn__blog-area pb-70">
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
                {/* <!-- BLOG AREA END --> */}

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

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
    const Herodata = JSON.parse(await fs.readFile(filePath));

    return {
        props: {
            Herodata,
        },
    };
}

export default HomePage;
