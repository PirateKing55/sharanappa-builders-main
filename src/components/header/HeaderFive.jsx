import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice, productSlug } from "@/lib/product";
import Link from "next/link";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";
import { FaSearch, FaPhoneAlt, FaCartArrowDown } from "react-icons/fa";
import MenuList from "@/components/header/elements/menuList";
const HeaderStyleFive = function ({ SetToggleClassName }) {
  const [cartMenuOpener, cartMenuOpenerSet] = useState(false);
  const [overlayBtn, SetoverlayBtn] = useState(false);
  const [offCanVastoggleBtn, SetOffCanVastoggleBtn] = useState(false);
  const [searchFormOpener, searchFormOpenerSet] = useState(false);

  function offcanVasToggler() {
    SetToggleClassName(true);
    SetoverlayBtn(true);
    SetOffCanVastoggleBtn((offCanVastoggleBtn) => !offCanVastoggleBtn);
  }

  function cartMenu() {
    SetoverlayBtn(true);
    cartMenuOpenerSet((cartMenuOpener) => !cartMenuOpener);
    SetToggleClassName(false);
  }

  function closeSideBar() {
    SetoverlayBtn(false);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
  }

  function overlay() {
    SetoverlayBtn((overlayBtn) => !overlayBtn);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
    SetToggleClassName(false);
  }

  function searchForm() {
    searchFormOpenerSet((searchFormOpener) => !searchFormOpener);
  }

  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector(".ltn__header-sticky");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const { products } = useSelector((state) => state.product);
  const [currentItems, setCurrentItems] = useState([]);

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const updatedProducts = query.length ? SearchProduct(products) : [];

  useEffect(() => {
    setCurrentItems(updatedProducts);
  }, [products, query]);

  let cartTotalPrice = 0;
  const { cartItems } = useSelector((state) => state.cart);

  cartItems.map((product, key) => {
    const discountedPrice = getDiscountPrice(
      product.price,
      product.discount
    ).toFixed(2);
    cartTotalPrice += discountedPrice * product.quantity;
  });

  return (
    <>
      <header className="ltn__header-area ltn__header-3">
        {/* <!-- ltn__header-middle-area start --> */}
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
          <Container>
            <Row>
              <Col>
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/img/logo.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
              </Col>

              <Col className="header-contact-serarch-column d-none d-xl-block">
                <div className="header-contact-search">
                  {/* header-feature-item */}
                  <div className="header-feature-item">
                    <div className="header-feature-icon">
                      <FaPhoneAlt className="icon-phone" />
                    </div>
                    <div className="header-feature-info">
                      <h6>Phone</h6>
                      <p>
                        <Link href="tel:0123456789">+0123-456-789</Link>
                      </p>
                    </div>
                  </div>
                  {/* header-search-2 */}
                  <div
                    className={`header-search-2 position-relative ${
                      searchFormOpener ? "search-open" : ""
                    }`}
                  >
                    <form id="#123" method="get" action="#">
                      <input
                        onChange={(e) => {
                          setQuery(e.target.value.toLowerCase());
                          searchForm();
                        }}
                        type="text"
                        name="search"
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <FaSearch className="icon-search" />
                        </span>
                      </button>
                    </form>
                    <div className="header-search-form-box11">
                      <ul className="searched-product-lists list-group">
                        {currentItems && currentItems ? (
                          currentItems.map((product, key) => {
                            const slug = productSlug(product.title);
                            return (
                              <li key={key} className="list-group-item">
                                <Link href={`/shop/${slug}`}>
                                  {product.title}
                                </Link>
                              </li>
                            );
                          })
                        ) : (
                          <li>NO Products Found</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="header-menu-column d-none d-sm-flex justify-content-end">
                <div className="ltn__header-options">
                  <ul>
                    <li>
                      {/* mini-cart 2 */}
                      <div className="mini-cart-icon mini-cart-icon-2">
                        <button
                          onClick={cartMenu}
                          className="ltn__utilize-toggle"
                        >
                          <span className="mini-cart-icon">
                            {/* <i className="icon-shopping-cart" /> */}
                            <FaCartArrowDown />
                            {cartItems.length > 0 ? (
                              <sup>{cartItems.length}</sup>
                            ) : (
                              <sup>0</sup>
                            )}
                          </span>
                          <h6>
                            <span>Your Cart</span>
                            <span className="ltn__secondary-color text-start">
                              ${cartTotalPrice.toFixed(2)}
                            </span>
                          </h6>
                        </button>
                      </div>
                    </li>
                  </ul>

                </div>
                <div className="mobile-menu-toggle me-0 ms-3 d-lg-none">
                    <button
                      onClick={offcanVasToggler}
                      className={`ltn__utilize-toggle ${
                        offCanVastoggleBtn ? "close" : ""
                      }`}
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        ></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        ></path>
                      </svg>
                    </button>
                  </div>
              </Col>
              <Col className="d-sm-none">
                <div className="ltn__header-options">
                  <ul className="mt-2">
                    <li>
                      {/* mini-cart 2 */}
                      <div className="mini-cart-icon mini-cart-icon-2">
                        <button
                          onClick={cartMenu}
                          className="ltn__utilize-toggle mnw-auto"
                        >
                          <span className="mini-cart-icon">
                            {/* <i className="icon-shopping-cart" /> */}
                            <FaCartArrowDown />
                            {cartItems.length > 0 ? (
                              <sup>{cartItems.length}</sup>
                            ) : (
                              <sup>0</sup>
                            )}
                          </span>
        
                        </button>
                      </div>
                    </li>
                  </ul>

                  {/* <!-- Mobile Menu Button --> */}
                  <div className="mobile-menu-toggle">
                    <button
                      onClick={offcanVasToggler}
                      className={`ltn__utilize-toggle ${
                        offCanVastoggleBtn ? "close" : ""
                      }`}
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        ></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- ltn__header-middle-area end --> */}

        {/* header-bottom-area start */}
        <div
          className={clsx(
            "header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white d-none d-lg-block",
            scroll > headerHeight && "sticky-active"
          )}
        >
          <Container>
            <Row>
              <Col className="header-menu-column justify-content-center">
                <div className="sticky-logo">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/img/logo.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="header-menu header-menu-2">
                  <nav>
                    <div className="ltn__main-menu">
                    <MenuList addListing={true} />
                    </div>
                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* header-bottom-area end */}
      </header>

      {/* <!-- Utilize Cart Menu Start --> */}

      <HeaderCartMenu
        cartMenu={cartMenu}
        cartMenuOpener={cartMenuOpener}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Cart Menu End --> */}

      {/* <!-- Utilize Mobile Menu Start --> */}
      <MobileMenu
        offCanVastoggleBtn={offCanVastoggleBtn}
        offcanVasToggler={offcanVasToggler}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Mobile Menu End --> */}
      <div
        className="ltn__utilize-overlay"
        style={{
          display: overlayBtn ? "block" : "none",
          opacity: overlayBtn ? "1" : "0",
        }}
        onClick={overlay}
      ></div>
    </>
  );
};

export default HeaderStyleFive;
