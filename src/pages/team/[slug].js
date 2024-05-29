
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaUserAlt,
  FaEnvelope,
  FaPencilAlt,
} from "react-icons/fa";
import { FaPhoneAlt, FaArrowDown } from "react-icons/fa";

import teamData from "@/data/team";
import { LayoutOne } from "@/layouts";
import { productSlug } from "@/lib/product";
import { Container, Row, Col, Form } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import ServiceItemOne from "@/components/service/serviceItemOne";

function TeamDetails({ team }) {
  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title="Agent Details"
          sectionPace=""
          currentSlug="Agent Details"
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- TEAM DETAILS AREA START --> */}
        <div className="ltn__team-details-area mb-120">
          <Container>
            <Row>
              <Col xs={12} lg={4}>
                <div className="ltn__team-details-member-info text-center mb-40">
                  <div className="team-details-img">
                    <img
                      src={`/img/team/${team.image}`}
                      alt="Team Member Image"
                    />
                  </div>
                  <h2>{team.name}</h2>
                  <h6 className="text-uppercase ltn__secondary-color">
                    {team.designation}
                  </h6>
                  <div className="ltn__social-media-3">
                    <ul>
                      <li>
                        <a href="#" title="Facebook">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Linkedin">
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={8}>
                <div className="ltn__team-details-member-info-details">
                  <p>{team.shortDescription}</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="ltn__team-details-member-about">
                        <ul>
                          <li>
                            <strong>Positions:</strong>{" "}
                            {team.information.position}
                          </li>
                          <li>
                            <strong>Experience:</strong>{" "}
                            {team.information.experience}
                          </li>
                          <li>
                            <strong>Location:</strong>{" "}
                            {team.information.location}
                          </li>
                          <li>
                            <strong>Practice Area:</strong>{" "}
                            {team.information.practiceArea}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Col xs={12} lg={6}>
                      <div className="ltn__team-details-member-about">
                        <ul>
                          <li>
                            <strong>Email:</strong> {team.information.email}
                          </li>
                          <li>
                            <strong>Fax:</strong> {team.information.fax}
                          </li>
                          <li>
                            <strong>Phone:</strong> {team.information.phone}
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </div>
                  <hr />
                  <p>{team.fullDescription}</p>

                  <Row className="ltn__custom-gutter mt-50 mb-20">
                    {team.services.map((service, key) => {
                      const slug = productSlug(service.title);
                      return (
                        <Col xs={12} sm={6} xl={4} key={key}>
                          <ServiceItemOne
                            data={service}
                            slug={slug}
                            ltn__service={false}
                          />
                        </Col>
                      );
                    })}
                  </Row>

                  <p>{team.serviceDescription}</p>

                  <div className="ltn__form-box contact-form-box box-shadow white-bg mt-50">
                    <h4 className="title-2">Contact for any Inquiry</h4>

                    <form id="contact-form" action="#" method="post">
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
                          <div className="input-item input-item input-item-email ltn__custom-icon">
                            <Form.Select className="nice-select">
                              <option>Select Service Type</option>
                              <option>Property Management </option>
                              <option>Mortgage Service </option>
                              <option>Consulting Service</option>
                              <option>Home Buying</option>
                              <option>Home selling</option>
                              <option>Escrow Services</option>
                            </Form.Select>
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
                          <input type="checkbox" name="agree" /> Save my name,
                          email, and website in this browser for the next time I
                          comment.
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
              </Col>
            </Row>
          </Container>
        </div>

        {/* <!-- TEAM DETAILS AREA END --> */}
      </LayoutOne>
    </>
  );
}

export default TeamDetails;

export async function getStaticProps({ params }) {
  // get blog data based on slug
  const team = teamData.filter(
    (single) => productSlug(single.name) === params.slug
  )[0];

  return { props: { team } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on blogs
  const paths = teamData.map((data) => ({
    params: {
      slug: productSlug(data.name)
    },
  }));

  return { paths, fallback: false };
}
