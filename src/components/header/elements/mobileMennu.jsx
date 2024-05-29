import Link from "next/link";
import {
  FaRegUser,
  FaRegHeart,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";

import {
  getSiblings,
  getClosest,
  slideUp,
  slideDown,
  slideToggle,
} from "@/lib/product";
import { useSelector } from "react-redux";

const MobileMenu = function ({ offCanVastoggleBtn, closeSideBar }) {
  const { cartItems } = useSelector((state) => state.cart);

  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    parentEl.classList.toggle("active");
    if (
      parentEl?.classList.contains("menu-expand") ||
      target.classList.contains("menu-expand")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        sibling.classList.remove("active");
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };

  return (
    <>
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu   ${
          offCanVastoggleBtn ? "ltn__utilize-open" : ""
        }`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link href="/">
                <img src="/img/logo.png" alt="Logo" />
              </Link>
            </div>
            <button onClick={closeSideBar} className="ltn__utilize-close">
              ×
            </button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link href="#">Home</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/home">Home Style 01</Link>
                  </li>
                  <li>
                    <Link href="/home/page-two">Home Style 02</Link>
                  </li>
                  <li>
                    <Link href="/home/page-three">Home Style 03</Link>
                  </li>
                  <li>
                    <Link href="/home/page-four">Home Style 04</Link>
                  </li>
                  <li>
                    <Link href="/home/page-five">Home Style 05</Link>
                  </li>
                  <li>
                    <Link href="/home/page-six">Home Style 06</Link>
                  </li>
                  <li>
                    <Link href="/home/page-seven">Home Style 07</Link>
                  </li>
                  <li>
                    <Link href="/home/page-eight">Home Style 08</Link>
                  </li>
                  <li>
                    <Link href="/home/page-nine">Home Style 09</Link>
                  </li>
                  <li>
                    <Link href="/home/page-ten">Home Style 10</Link>
                  </li>
                  <li>
                    <Link href="/home/page-eleven">Home Style 11</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">About</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>

                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/page-two">Portfolio - 02</Link>
                  </li>

                  <li>
                    <Link href="/team">Team</Link>
                  </li>

                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/locations">Google Map Locations</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Property</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/shop">Property</Link>
                  </li>
                  <li>
                    <Link href="/shop/grid">Property Grid</Link>
                  </li>
                  <li>
                    <Link href="/shop/list">Property List</Link>
                  </li>
                  <li>
                    <Link href="/shop/left-sidebar">Property Left sidebar</Link>
                  </li>
                  <li>
                    <Link href="/shop/right-sidebar">
                      Property right sidebar
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link href="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link href="/order-tracking">Order Tracking</Link>
                  </li>
                  <li>
                    <Link href="/my-account">My Account</Link>
                  </li>
                  <li>
                    <Link href="/login">Sign in</Link>
                  </li>
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">News</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/blog">News</Link>
                  </li>
                  <li>
                    <Link href="/blog/grid">News Grid</Link>
                  </li>
                  <li>
                    <Link href="/blog/left-sidebar">News Left sidebar</Link>
                  </li>
                  <li>
                    <Link href="/blog/right-sidebar">News Right sidebar</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Pages</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>

                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/page-two">Portfolio - 02</Link>
                  </li>

                  <li>
                    <Link href="/team">Team</Link>
                  </li>

                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/history">History</Link>
                  </li>
                  <li>
                    <Link href="/add-listing">Add Listing</Link>
                  </li>
                  <li>
                    <Link href="/locations">Google Map Locations</Link>
                  </li>
                  <li>
                    <Link href="/404">404</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Coming Soon</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <Link href="/my-account" title="My Account">
                  <span className="utilize-btn-icon">
                    <FaRegUser />
                  </span>
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/wishlist" title="Wishlist">
                  <span className="utilize-btn-icon">
                    <FaRegHeart />
                    {cartItems.length > 0 ? (
                      <sup>{cartItems.length}</sup>
                    ) : (
                      <sup>0</sup>
                    )}
                  </span>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" title="Shoping Cart">
                  <span className="utilize-btn-icon">
                    <FaShoppingCart />
                    {cartItems.length > 0 ? (
                      <sup>{cartItems.length}</sup>
                    ) : (
                      <sup>0</sup>
                    )}
                  </span>
                  Shoping Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
