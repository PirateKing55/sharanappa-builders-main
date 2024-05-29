import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import {
  FaHome,
  FaUserAlt,
  FaMapMarkerAlt,
  FaList,
  FaHeart,
  FaMapMarked,
  FaDollarSign,
  FaSignOutAlt,
  FaLock,
  FaEnvelope,
  FaArrowDown,
  FaPencilAlt,
  FaPhoneAlt,
  FaTrashAlt,
  FaStar,
  FaRegStarHalf,
  FaRegStar,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";

function MyAccount() {
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="My Account"
          sectionPace=""
          currentSlug="My Account"
        />

        {/* <!-- LOGIN AREA START --> */}
        <div className="liton__wishlist-area pb-70">
          <Container>
            <Row>
              <Col xs={12}>
                {/* <!-- PRODUCT TAB AREA START --> */}
                <div className="ltn__product-tab-area">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="ltn_tab_1_1"
                  >
                    <Row>
                      <Col xs={12} lg={4}>
                        <div className="ltn__tab-menu-list mb-50">
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_1">
                                Dashboard <FaHome />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_2">
                                Profiles <FaUserAlt />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_3">
                                address <FaMapMarkerAlt />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_4">
                                Account Details <FaUserAlt />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_5">
                                My Properties <FaList />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_6">
                                Favorited Properties <FaHeart />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_7">
                                Add Property <FaMapMarked />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_8">
                                Payments <FaDollarSign />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_9">
                                Change Password <FaLock />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link href="/login">
                                Logout <FaSignOutAlt />
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col xs={12} lg={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey="ltn_tab_1_1">
                            <div className="ltn__myaccount-tab-content-inner">
                              <p>
                                Hello <strong>UserName</strong> (not
                                <strong>UserName</strong>?
                                <small>
                                  <Link href="/login">Log out</Link>
                                </small>
                                )
                              </p>
                              <p>
                                From your account dashboard you can view your
                                <span>recent orders</span>, manage your
                                <span>shipping and billing addresses</span>, and
                                <span>
                                  edit your password and account details
                                </span>
                                .
                              </p>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_2">
                            <div className="ltn__myaccount-tab-content-inner">
                              {/* <!-- comment-area --> */}
                              <div className="ltn__comment-area mb-50">
                                <div className="ltn-author-introducing clearfix">
                                  <div className="author-img">
                                    <img
                                      src="img/blog/author.jpg"
                                      alt="Author Image"
                                    />
                                  </div>
                                  <div className="author-info">
                                    <h6>Agent of Property</h6>
                                    <h2>Rosalina D. William</h2>
                                    <div className="footer-address">
                                      <ul>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-placeholder"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              Brooklyn, New York, United States
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-call"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              <Link href="tel:+0123-456789">
                                                +0123-456789
                                              </Link>
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-mail"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              <Link href="mailto:example@example.com">
                                                example@example.com
                                              </Link>
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="ltn__form-box contact-form-box box-shadow white-bg">
                                  <h4 className="title-2">Get A Quote</h4>
                                  <form
                                    id="contact-form"
                                    action="#"
                                    method="post"
                                  >
                                    <Row>
                                      <Col xs={12} md={6}>
                                        <div className="input-item input-item-name ltn__custom-icon">
                                          <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                          />
                                          <span className="inline-icon">
                                            <FaUserAlt />
                                          </span>
                                        </div>
                                      </Col>
                                      <Col xs={12} md={6}>
                                        <div className="input-item input-item-email ltn__custom-icon">
                                          <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter email address"
                                          />
                                          <span className="inline-icon">
                                            <FaEnvelope />
                                          </span>
                                        </div>
                                      </Col>
                                      <Col xs={12} md={6}>
                                        <div className="input-item ltn__custom-icon">
                                          <select className="nice-select">
                                            <option>Select Service Type</option>
                                            <option>Property Management</option>
                                            <option>Mortgage Service </option>
                                            <option>Consulting Service</option>
                                            <option>Home Buying</option>
                                            <option>Home selling</option>
                                            <option>Escrow Services</option>
                                          </select>
                                          <span className="inline-icon">
                                            <FaArrowDown />
                                          </span>
                                        </div>
                                      </Col>
                                      <Col xs={12} md={6}>
                                        <div className="input-item input-item-phone ltn__custom-icon">
                                          <input
                                            type="text"
                                            name="phone"
                                            placeholder="Enter phone number"
                                          />
                                          <span className="inline-icon">
                                            <FaPhoneAlt />
                                          </span>
                                        </div>
                                      </Col>
                                    </Row>
                                    <div className="input-item input-item-textarea ltn__custom-icon">
                                      <textarea
                                        name="message"
                                        placeholder="Enter message"
                                      ></textarea>
                                      <span className="inline-icon">
                                        <FaPencilAlt />
                                      </span>
                                    </div>
                                    <p>
                                      <label className="input-info-save mb-0">
                                        <input type="checkbox" name="agree" />
                                        Save my name, email, and website in this
                                        browser for the next time I comment.
                                      </label>
                                    </p>
                                    <div className="btn-wrapper mt-0">
                                      <button
                                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                        type="submit"
                                      >
                                        get a free service
                                      </button>
                                    </div>
                                    <p className="form-messege mb-0 mt-20"></p>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_3">
                            <div className="ltn__myaccount-tab-content-inner">
                              <p>
                                The following addresses will be used on the
                                checkout page by default.
                              </p>
                              <Row>
                                <div className="col-md-6 col-12 learts-mb-30">
                                  <h4>
                                    Billing Address
                                    <small>
                                      <Link href="#">edit</Link>
                                    </small>
                                  </h4>
                                  <address>
                                    <p>
                                      <strong>Alex Tuntuni</strong>
                                    </p>
                                    <p>
                                      1355 Market St, Suite 900 <br />
                                      San Francisco, CA 94103
                                    </p>
                                    <p>Mobile: (123) 456-7890</p>
                                  </address>
                                </div>
                                <div className="col-md-6 col-12 learts-mb-30">
                                  <h4>
                                    Shipping Address
                                    <small>
                                      <Link href="#">edit</Link>
                                    </small>
                                  </h4>
                                  <address>
                                    <p>
                                      <strong>Alex Tuntuni</strong>
                                    </p>
                                    <p>
                                      1355 Market St, Suite 900 <br />
                                      San Francisco, CA 94103
                                    </p>
                                    <p>Mobile: (123) 456-7890</p>
                                  </address>
                                </div>
                              </Row>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_4">
                            <div className="ltn__myaccount-tab-content-inner">
                              <p>
                                The following addresses will be used on the
                                checkout page by default.
                              </p>
                              <div className="ltn__form-box">
                                <form action="#">
                                  <div className="row mb-50">
                                    <Col xs={12} md={6}>
                                      <label>First name:</label>
                                      <input type="text" name="ltn__name" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Last name:</label>
                                      <input type="text" name="ltn__lastname" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Display Name:</label>
                                      <input
                                        type="text"
                                        name="ltn__lastname"
                                        placeholder="Ethan"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Display Email:</label>
                                      <input
                                        type="email"
                                        name="ltn__lastname"
                                        placeholder="example@example.com"
                                      />
                                    </Col>
                                  </div>
                                  <fieldset>
                                    <legend>Password change</legend>
                                    <Row>
                                      <div className="col-md-12">
                                        <label>
                                          Current password (leave blank to leave
                                          unchanged):
                                        </label>
                                        <input
                                          type="password"
                                          name="ltn__name"
                                        />
                                        <label>
                                          New password (leave blank to leave
                                          unchanged):
                                        </label>
                                        <input
                                          type="password"
                                          name="ltn__lastname"
                                        />
                                        <label>Confirm new password:</label>
                                        <input
                                          type="password"
                                          name="ltn__lastname"
                                        />
                                      </div>
                                    </Row>
                                  </fieldset>
                                  <div className="btn-wrapper">
                                    <button
                                      type="submit"
                                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_5">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__my-properties-table table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">My Properties</th>
                                      <th scope="col"></th>
                                      <th scope="col">Date Added</th>
                                      <th scope="col">Actions</th>
                                      <th scope="col">Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="ltn__my-properties-img">
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                          <img
                                            src="/img/product-3/2.jpg"
                                            alt="#"
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="ltn__my-properties-info">
                                          <h6 className="mb-10">
                                            <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                              sdfasdfdsfsdafs
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="icon-placeholder"></i>
                                            Brooklyn, New York, United States
                                          </small>
                                          <div className="product-ratting">
                                            <ul>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStarHalf />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li className="review-total">
                                                <Link href="#"> ( 95 Reviews )</Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Feb 22, 2022</td>
                                      <td>
                                        <Link href="#">Edit</Link>
                                      </td>
                                      <td>
                                        <Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="ltn__my-properties-img">
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                          <img
                                            src="/img/product-3/3.jpg"
                                            alt="#"
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="ltn__my-properties-info">
                                          <h6 className="mb-10">
                                            <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                              sdfasdfdsfsdafs
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="icon-placeholder"></i>
                                            Brooklyn, New York, United States
                                          </small>
                                          <div className="product-ratting">
                                            <ul>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStarHalf />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li className="review-total">
                                                <Link href="#"> ( 95 Reviews )</Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Feb 22, 2022</td>
                                      <td>
                                        <Link href="#">Edit</Link>
                                      </td>
                                      <td>
                                        <Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="ltn__my-properties-img">
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                          <img
                                            src="/img/product-3/7.jpg"
                                            alt="#"
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="ltn__my-properties-info">
                                          <h6 className="mb-10">
                                            <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                              sdfasdfdsfsdafs
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="icon-placeholder"></i>
                                            Brooklyn, New York, United States
                                          </small>
                                          <div className="product-ratting">
                                            <ul>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStarHalf />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li className="review-total">
                                                <Link href="#"> ( 95 Reviews )</Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Feb 22, 2022</td>
                                      <td>
                                        <Link href="#">Edit</Link>
                                      </td>
                                      <td>
                                        <Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                  <ul>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-left"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">1</Link>
                                    </li>
                                    <li className="active">
                                      <Link href="#">2</Link>
                                    </li>
                                    <li>
                                      <Link href="#">3</Link>
                                    </li>
                                    <li>
                                      <Link href="#">...</Link>
                                    </li>
                                    <li>
                                      <Link href="#">10</Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-right"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_6">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__my-properties-table table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Top Property</th>
                                      <th scope="col"></th>
                                      <th scope="col">Date Added</th>
                                      <th scope="col">Actions</th>
                                      <th scope="col">Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="ltn__my-properties-img">
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                          <img
                                            src="/img/product-3/2.jpg"
                                            alt="#"
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="ltn__my-properties-info">
                                          <h6 className="mb-10">
                                            <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                              sdfasdfdsfsdafs
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="icon-placeholder"></i>
                                            Brooklyn, New York, United States
                                          </small>
                                          <div className="product-ratting">
                                            <ul>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStarHalf />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li className="review-total">
                                                <Link href="#"> ( 95 Reviews )</Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Feb 22, 2022</td>
                                      <td>
                                        <Link href="#">Edit</Link>
                                      </td>
                                      <td>
                                        <Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="ltn__my-properties-img">
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                          <img
                                            src="/img/product-3/3.jpg"
                                            alt="#"
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="ltn__my-properties-info">
                                          <h6 className="mb-10">
                                            <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                              sdfasdfdsfsdafs
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="icon-placeholder"></i>
                                            Brooklyn, New York, United States
                                          </small>
                                          <div className="product-ratting">
                                            <ul>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStarHalf />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li className="review-total">
                                                <Link href="#"> ( 95 Reviews )</Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Feb 22, 2022</td>
                                      <td>
                                        <Link href="#">Edit</Link>
                                      </td>
                                      <td>
                                        <Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="ltn__my-properties-img">
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                          <img
                                            src="/img/product-3/7.jpg"
                                            alt="#"
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="ltn__my-properties-info">
                                          <h6 className="mb-10">
                                            <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                              sdfasdfdsfsdafs
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="icon-placeholder"></i>
                                            Brooklyn, New York, United States
                                          </small>
                                          <div className="product-ratting">
                                            <ul>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStarHalf />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li className="review-total">
                                                <Link href="#"> ( 95 Reviews )</Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </td>
                                      <td>Feb 22, 2022</td>
                                      <td>
                                        <Link href="#">Edit</Link>
                                      </td>
                                      <td>
                                        <Link href="#">
                                          <span>
                                            <FaTrashAlt />
                                          </span>
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                  <ul>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-left"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">1</Link>
                                    </li>
                                    <li className="active">
                                      <Link href="#">2</Link>
                                    </li>
                                    <li>
                                      <Link href="#">3</Link>
                                    </li>
                                    <li>
                                      <Link href="#">...</Link>
                                    </li>
                                    <li>
                                      <Link href="#">10</Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-right"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_7">
                            <div className="ltn__myaccount-tab-content-inner">
                              <h6>Property Description</h6>
                              <Row>
                                <div className="col-md-12">
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="*Title (mandatory)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <textarea
                                      name="ltn__message"
                                      placeholder="Description"
                                    ></textarea>
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </div>
                              </Row>
                              <h6>Property Price</h6>
                              <Row>
                                <Col xs={12} md={6}>
                                  <div className="input-item  input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Price in $ (only numbers)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="After Price Label (ex: /month)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Before Price Label (ex: from)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Yearly Tax Rate"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Homeowners Association Fee(monthly)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                              </Row>
                              <h6>Select Categories</h6>
                              <Row>
                                <Col xs={12} md={6} lg={4}>
                                  <div className="input-item ltn__custom-icon">
                                    <select className="nice-select">
                                      <option>None</option>
                                      <option>Apartments</option>
                                      <option>Condos</option>
                                      <option>Duplexes</option>
                                      <option>Houses</option>
                                      <option>Industrial</option>
                                      <option>Land</option>
                                      <option>Offices</option>
                                      <option>Retail</option>
                                      <option>Villas</option>
                                    </select>
                                    <span className="inline-icon">
                                      <FaArrowDown />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <div className="input-item ltn__custom-icon">
                                    <select className="nice-select">
                                      <option>None</option>
                                      <option>Rentals</option>
                                      <option>Sales</option>
                                    </select>
                                    <span className="inline-icon">
                                      <FaArrowDown />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <div className="input-item ltn__custom-icon">
                                    <select className="nice-select">
                                      <option>no status</option>
                                      <option>Active</option>
                                      <option>hot offer</option>
                                      <option>new offer</option>
                                      <option>open house</option>
                                      <option>sold</option>
                                    </select>
                                    <span className="inline-icon">
                                      <FaArrowDown />
                                    </span>
                                  </div>
                                </Col>
                              </Row>
                              <h6>Listing Media</h6>
                              <input
                                type="file"
                                id="myFile"
                                name="filename"
                                className="btn theme-btn-3 mb-10"
                              />
                              <br />
                              <p>
                                <small>
                                  * At least 1 image is required for a valid
                                  submission.Minimum size is 500/500px.
                                </small>
                                <br />
                                <small>
                                  * PDF files upload supported as well.
                                </small>
                                <br />
                                <small>
                                  * Images might take longer to be processed.
                                </small>
                              </p>
                              <h6>Video Option</h6>
                              <Row>
                                <Col xs={12} md={6}>
                                  <div className="input-item ltn__custom-icon">
                                    <select className="nice-select">
                                      <option>Video from</option>
                                      <option>vimeo</option>
                                      <option>youtube</option>
                                    </select>
                                    <span className="inline-icon">
                                      <FaArrowDown />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Embed Video ID"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                              </Row>
                              <h6>Virtual Tour</h6>
                              <div className="input-item input-item-textarea ltn__custom-icon">
                                <textarea
                                  name="ltn__message"
                                  placeholder="Virtual Tour:"
                                ></textarea>
                                <span className="inline-icon">
                                  <FaPencilAlt />
                                </span>
                              </div>
                              <h6>Listing Location</h6>
                              <Row>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="*Address"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Country"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="County / State"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="City"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Neighborhood"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Zip"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <div className="col-lg-12">
                                  <div className="property-details-google-map mb-60">
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                                      width="100%"
                                      height="100%"
                                    ></iframe>
                                  </div>
                                </div>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Latitude (for Google Maps)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Longitude (for Google Maps)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <label className="checkbox-item">
                                    Enable Google Street View
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Google Street View - Camera Angle (value from 0 to 360)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                              </Row>
                              <h6>Listing Details</h6>
                              <Row>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Size in ft2 (*only numbers)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Lot Size in ft2 (*only numbers)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Rooms (*only numbers)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Bedrooms (*only numbers)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Bathrooms (*only numbers)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Custom ID (*text)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Garages (*text)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Year Built (*numeric)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Garage Size (*text)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Available from (*date)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Basement (*text)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Extra Details (*text)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Roofing (*text)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Exterior Material (*text)"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item ltn__custom-icon">
                                    <select className="nice-select">
                                      <option>Structure Type</option>
                                      <option>Not Available</option>
                                      <option>Brick</option>
                                      <option>Wood</option>
                                      <option>Cement</option>
                                    </select>
                                    <span className="inline-icon">
                                      <FaArrowDown />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item ltn__custom-icon">
                                    <select className="nice-select">
                                      <option>Floors No</option>
                                      <option>Not Available</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                    <span className="inline-icon">
                                      <FaArrowDown />
                                    </span>
                                  </div>
                                </Col>
                                <div className="col-lg-12">
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <textarea
                                      name="ltn__message"
                                      placeholder="Owner/Agent notes (*not visible on front end)"
                                    ></textarea>
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </div>
                              </Row>
                              <h6>Select Energy ClassNameclassName</h6>
                              <Row>
                                <Col xs={12} md={6}>
                                  <div className="input-item ltn__custom-icon">
                                    <select className="nice-select">
                                      <option>
                                        Select Energy ClassNameclassName (EU
                                        regulation)
                                      </option>
                                      <option>A+</option>
                                      <option>A</option>
                                      <option>B</option>
                                      <option>C</option>
                                      <option>D</option>
                                      <option>E</option>
                                    </select>
                                    <span className="inline-icon">
                                      <FaArrowDown />
                                    </span>
                                  </div>
                                </Col>
                                <Col xs={12} md={6}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name="ltn__name"
                                      placeholder="Energy Index in kWh/m2a"
                                    />
                                    <span className="inline-icon">
                                      <FaPencilAlt />
                                    </span>
                                  </div>
                                </Col>
                              </Row>
                              <h6>Amenities and Features</h6>
                              <h6>Interior Details</h6>
                              <Row>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Equipped Kitchen
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Gym
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Laundry
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Media Room
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                              </Row>
                              <h6 className="mt-20">Outdoor Details</h6>
                              <Row>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Back yard
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Basketball court
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Front yard
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Garage Attached
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Hot Bath
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Pool
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                              </Row>
                              <h6 className="mt-20">Utilities</h6>
                              <Row>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Central Air
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Electricity
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Heating
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Natural Gas
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Ventilation
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Water
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                              </Row>
                              <h6 className="mt-20">Other Features</h6>
                              <Row>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Chair Accessible
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Elevator
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Fireplace
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Smoke detectors
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    Washer and dryer
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                  <label className="checkbox-item">
                                    WiFi
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </Col>
                              </Row>
                              <div
                                className="alert alert-warning d-none"
                                role="alert"
                              >
                                Please note that the date and time you requested
                                may not be available. We will contact you to
                                confirm your actual appointment details.
                              </div>
                              <div className="btn-wrapper text-center--- mt-30">
                                <button
                                  className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                  type="submit"
                                >
                                  Submit Property
                                </button>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_8">
                            <div className="ltn__myaccount-tab-content-inner">
                              <Row>
                                <div className="col-lg-12">
                                  <div className="ltn__checkout-inner">
                                    <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                                      <h5>
                                        Returning customer?
                                        <a
                                          className="ltn__secondary-color"
                                          href="#ltn__returning-customer-login"
                                          data-toggle="collapse"
                                        >
                                          Click here to login
                                        </a>
                                      </h5>
                                      <div
                                        id="ltn__returning-customer-login"
                                        className="collapse ltn__checkout-single-content-info"
                                      >
                                        <div className="ltn_coupon-code-form ltn__form-box">
                                          <p>Please login your accont.</p>
                                          <form action="#">
                                            <Row>
                                              <Col xs={12} md={6}>
                                                <div className="input-item input-item-name ltn__custom-icon">
                                                  <input
                                                    type="text"
                                                    name="ltn__name"
                                                    placeholder="Enter your name"
                                                  />
                                                </div>
                                              </Col>
                                              <Col xs={12} md={6}>
                                                <div className="input-item input-item-email ltn__custom-icon">
                                                  <input
                                                    type="email"
                                                    name="ltn__email"
                                                    placeholder="Enter email address"
                                                  />
                                                </div>
                                              </Col>
                                            </Row>
                                            <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                                              Login
                                            </button>
                                            <label className="input-info-save mb-0">
                                              <input
                                                type="checkbox"
                                                name="agree"
                                              />
                                              Remember me
                                            </label>
                                            <p className="mt-30">
                                              <Link href="/register">
                                                Lost your password?
                                              </Link>
                                            </p>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                                      <h5>
                                        Have a coupon?
                                        <a
                                          className="ltn__secondary-color"
                                          href="#ltn__coupon-code"
                                          data-toggle="collapse"
                                        >
                                          Click here to enter your code
                                        </a>
                                      </h5>
                                      <div
                                        id="ltn__coupon-code"
                                        className="collapse ltn__checkout-single-content-info"
                                      >
                                        <div className="ltn__coupon-code-form">
                                          <p>
                                            If you have a coupon code, please
                                            apply it below.
                                          </p>
                                          <form action="#">
                                            <input
                                              type="text"
                                              name="coupon-code"
                                              placeholder="Coupon code"
                                            />
                                            <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                                              Apply Coupon
                                            </button>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ltn__checkout-single-content mt-50">
                                      <h4 className="title-2">
                                        Billing Details
                                      </h4>
                                      <div className="ltn__checkout-single-content-info">
                                        <form action="#">
                                          <h6>Personal Information</h6>
                                          <Row>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-name ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__name"
                                                  placeholder="First name"
                                                />
                                                <span className="inline-icon">
                                                  <FaUserAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-name ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__lastname"
                                                  placeholder="Last name"
                                                />
                                                <span className="inline-icon">
                                                  <FaUserAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-email ltn__custom-icon">
                                                <input
                                                  type="email"
                                                  name="ltn__email"
                                                  placeholder="email address"
                                                />
                                                <span className="inline-icon">
                                                  <FaEnvelope />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-phone ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__phone"
                                                  placeholder="phone number"
                                                />
                                                <span className="inline-icon">
                                                  <FaPhoneAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-website ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__company"
                                                  placeholder="Company name (optional)"
                                                />
                                                <span className="inline-icon">
                                                  <FaGlobe />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-website ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__phone"
                                                  placeholder="Company address (optional)"
                                                />
                                                <span className="inline-icon">
                                                  <FaGlobe />
                                                </span>
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Country</h6>
                                              <div className="input-item ltn__custom-icon">
                                                <select className="nice-select">
                                                  <option>
                                                    Select Country
                                                  </option>
                                                  <option>Australia</option>
                                                  <option>Canada</option>
                                                  <option>China</option>
                                                  <option>Morocco</option>
                                                  <option>Saudi Arabia</option>
                                                  <option>
                                                    United Kingdom (UK)
                                                  </option>
                                                  <option>
                                                    United States (US)
                                                  </option>
                                                </select>
                                                <span className="inline-icon">
                                                  <FaArrowDown />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12}>
                                              <h6>Address</h6>
                                              <Row>
                                                <Col xs={12} md={6}>
                                                  <div className="input-item">
                                                    <input
                                                      type="text"
                                                      placeholder="House number and street name"
                                                    />
                                                  </div>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                  <div className="input-item">
                                                    <input
                                                      type="text"
                                                      placeholder="Apartment, suite, unit etc. (optional)"
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Town / City</h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="City"
                                                />
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>State </h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="State"
                                                />
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Zip</h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="Zip"
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                          <p>
                                            <label className="input-info-save mb-0">
                                              <input
                                                type="checkbox"
                                                name="agree"
                                              />
                                              Create an account?
                                            </label>
                                          </p>
                                          <h6>Order Notes (optional)</h6>
                                          <div className="input-item input-item-textarea ltn__custom-icon">
                                            <textarea
                                              name="ltn__message"
                                              placeholder="Notes about your order, e.g. special notes for delivery."
                                            ></textarea>
                                            <span className="inline-icon">
                                              <FaPencilAlt />
                                            </span>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Col xs={12} lg={6}>
                                  <div className="ltn__checkout-payment-method mt-50">
                                    <h4 className="title-2">Payment Method</h4>
                                    <Accordion defaultActiveKey="2">
                                      <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                          Check payments
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>
                                            Please send a check to Store Name,
                                            Store Street, Store Town, Store
                                            State / County, Store Postcode.
                                          </p>
                                        </Accordion.Body>
                                      </Accordion.Item>

                                      <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                          Cash on delivery
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>Pay with cash upon delivery.</p>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                      <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                          PayPal
                                          <img
                                            src="/img/icons/payment-3.png"
                                            alt="#"
                                          />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>
                                            Pay via PayPal; you can pay with
                                            your credit card if you don’t have a
                                            PayPal account.
                                          </p>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                    <div className="ltn__payment-note mt-30 mb-30">
                                      <p>
                                        Your personal data will be used to
                                        process your order, support your
                                        experience throughout this website, and
                                        for other purposes described in our
                                        privacy policy.
                                      </p>
                                    </div>
                                    <button
                                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                      type="submit"
                                    >
                                      Place order
                                    </button>
                                  </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                  <div className="shoping-cart-total mt-50">
                                    <h4 className="title-2">Cart Totals</h4>
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td>
                                            3 Rooms Manhattan
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$298.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            OE Replica Wheels
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$170.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Wheel Bearing Retainer
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$150.00</td>
                                        </tr>
                                        <tr>
                                          <td>Shipping and Handing</td>
                                          <td>$15.00</td>
                                        </tr>
                                        <tr>
                                          <td>Vat</td>
                                          <td>$00.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <strong>Order Total</strong>
                                          </td>
                                          <td>
                                            <strong>$633.00</strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_9">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="account-login-inner">
                                <form
                                  action="#"
                                  className="ltn__form-box contact-form-box"
                                >
                                  <h5 className="mb-30">Change Password</h5>
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Current Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="New Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Confirm New Password*"
                                  />
                                  <div className="btn-wrapper mt-0">
                                    <button
                                      className="theme-btn-1 btn btn-block"
                                      type="submit"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
                {/* <!-- PRODUCT TAB AREA END --> */}
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- LOGIN AREA END --> */}

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

export default MyAccount;
