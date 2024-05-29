import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderTopBarThree from "./headerTopBar/headerTopBarStyleThree";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";
import MenuList from "@/components/header/elements/menuList";
const HeaderTransparent = function ({ SetToggleClassName, topbar }) {
  const [cartMenuOpener, cartMenuOpenerSet] = useState(false);
  const [overlayBtn, SetoverlayBtn] = useState(false);
  const [offCanVastoggleBtn, SetOffCanVastoggleBtn] = useState(false);

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

  return (
    <>
      <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-2">
        {/* <!-- ltn__header-top-area start --> */}
        {topbar ? <HeaderTopBarThree /> : null}

        {/* <!-- ltn__header-top-area end --> */}

        {/* <!-- ltn__header-middle-area start --> */}
        <div
          className={clsx(
            "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black",
            scroll > headerHeight && "sticky-active"
          )}
        >
          <Container>
            <Row>
              <Col>
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/img/logo-2.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col className="header-menu-column menu-color-white">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                    <MenuList addListing={true} />
                    </div>
                  </nav>
                </div>
              </Col>
              <div className="ltn__header-options ltn__header-options-2 ">
                {/* <!-- Mobile Menu Button --> */}
                <div className="mobile-menu-toggle d-xl-none">
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
            </Row>
          </Container>
        </div>
        {/* <!-- ltn__header-middle-area end --> */}
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

export default HeaderTransparent;
