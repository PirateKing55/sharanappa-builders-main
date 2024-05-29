import Link from "next/link";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
} from "react-icons/fa";

import blogData from "@/data/blog";
import { LayoutOne } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import BlogSideBar from "@/components/blog/sidebar";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

function BlogtDetails({ blog }) {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const relatedBlogs = getProducts(blogData, blog.category[0], "popular", 2);

  const latestdBlogs = getProducts(blogData, "buying", "featured", 4);

  const topRatedProducts = getProducts(products, "buying", "featured", 3);

  const popularProducts = getProducts(products, "buying", "featured", 3);

  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title="News Details"
          sectionPace=""
          currentSlug="News Details"
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/*  <!-- PAGE DETAILS AREA START (blog-details) -->*/}
        <div className="ltn__page-details-area ltn__blog-details-area mb-120">
          <Container>
            <Row>
              <Col className="col-lg-8 col-md-12">
                <div className="ltn__blog-details-wrap">
                  <div className="ltn__page-details-inner ltn__blog-details-inner">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-category">
                          <Link href="#">{blog.type}</Link>
                        </li>
                      </ul>
                    </div>
                    <h2 className="ltn__blog-title">{blog.title}</h2>
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <Link href="#">
                            <img src={`/img/blog/${blog.author.img}`} alt="#" />
                            By: {blog.author.name}
                          </Link>
                        </li>
                        <li className="ltn__blog-date">
                          <FaCalendarAlt />
                          {blog.date}
                        </li>
                        <li>
                          <Link href="#">
                            <i className="far fa-comments"></i>
                            <span>{blog.comments}</span> Comments
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p>{blog.fullDescription}</p>
                    <p>{blog.shortDescription}</p>
                    <img src={`/img/blog/${blog.thumbImg}`} alt="Image" />
                    {blog.extraInformation.map((extra, key) => {
                      return (
                        <div key={key}>
                          <h2>{extra.title}</h2>
                          <p>{extra.description}</p>
                          {extra.hr ? <hr /> : ""}
                        </div>
                      );
                    })}

                    <h2>Setting the mood with incense</h2>

                    <div className="list-item-with-icon-2">
                      <ul>
                        {blog.extraInformationList.map((single, key) => {
                          return (
                            <li key={key}>
                              {" "}
                              <span className="me-2">
                                <FaCheck />
                              </span>{" "}
                              {single.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <blockquote>
                      <h6 className="ltn__secondary-color mt-0">
                        BY {blog.blockquote.name}
                      </h6>
                      {blog.blockquote.quoteTitle}
                    </blockquote>
                    <p>{blog.extraContent.description1}</p>

                    <img
                      className="alignleft"
                      src="/img/blog/blog-details/1.jpg"
                      alt="Image"
                    />
                    <p>{blog.extraContent.description2}</p>
                    <p>{blog.extraContent.description3}</p>

                    <h4>{blog.extraContent.title}</h4>
                    <p>{blog.extraContent.description4}</p>

                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src={`/img/service/${blog.extraContent.caption.img1}`}
                          alt="Image"
                        />
                        <label>{blog.extraContent.caption.imageCaption}</label>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={`/img/service/${blog.extraContent.caption.img2}`}
                          alt="Image"
                        />
                      </div>
                    </div>
                    <p>{blog.extraContent.caption.imageCaptionDetails}</p>
                  </div>
                  {/* <!-- blog-tags-social-media --> */}
                  <div className="ltn__blog-tags-social-media mt-80 row">
                    <div className="ltn__tagcloud-widget col-lg-8">
                      <h4>Releted Tags</h4>
                      <ul>
                        <li>
                          <Link href="#">Popular</Link>
                        </li>
                        <li>
                          <Link href="#">Business</Link>
                        </li>
                        <li>
                          <Link href="#">ux</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__social-media text-right text-end col-lg-4">
                      <h4>Social Share</h4>
                      <ul>
                        <li>
                          <Link href="#">
                            <FaDribbble />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaFacebookF />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  {/* <!-- prev-next-btn --> */}
                  <div className="ltn__prev-next-btn row mb-50">
                    <div className="blog-prev col-lg-6">
                      <h6>Prev Post</h6>
                      <h3 className="ltn__blog-title">
                        <Link href="#">Tips On Minimalist</Link>
                      </h3>
                    </div>
                    <div className="blog-prev blog-next text-right text-end col-lg-6">
                      <h6>Next Post</h6>
                      <h3 className="ltn__blog-title">
                        <Link href="#">Less Is More</Link>
                      </h3>
                    </div>
                  </div>
                  <hr />
                  {/* <!-- related-post --> */}
                  <div className="related-post-area mb-50">
                    <h4 className="title-2">Related Post</h4>
                    <Row>
                      {relatedBlogs.map((blog, key) => {
                        const slug = productSlug(blog.title);
                        let imageCount = 1 + key;

                        return (
                          <Col xs={12} md={6} key={key}>
                            <div className="ltn__blog-item ltn__blog-item-6">
                              <div className="ltn__blog-img">
                                <Link href={`/blog/${slug}`}>
                                  <img
                                    src={`/img/blog/${imageCount}.jpg`}
                                    alt="Image"
                                  />
                                </Link>
                              </div>
                              <div className="ltn__blog-brief">
                                <div className="ltn__blog-meta">
                                  <ul>
                                    <li className="ltn__blog-date ltn__secondary-color">
                                      <FaCalendarAlt />
                                      {blog.date}
                                    </li>
                                  </ul>
                                </div>
                                <h3 className="ltn__blog-title">
                                  <Link href={`/blog/${slug}`}>{blog.title}</Link>
                                </h3>
                                <p>{blog.shortDescription}</p>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                  {/* <!-- comment-area --> */}
                  <div className="ltn__comment-area mb-50">
                    <div className="ltn-author-introducing clearfix">
                      <div className="author-img">
                        <img
                          src={`/img/blog/${blog.author.img}`}
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-info">
                        <h6>Written by</h6>
                        <h2>{blog.author.name}</h2>
                        <p>{blog.author.description}</p>
                      </div>
                    </div>
                    <h4 className="title-2">03 Comments</h4>
                    <div className="ltn__comment-inner">
                      <ul>
                        <li>
                          <div className="ltn__comment-item clearfix">
                            <div className="ltn__commenter-img">
                              <img src="/img/testimonial/1.jpg" alt="Image" />
                            </div>
                            <div className="ltn__commenter-comment">
                              <h6>
                                <Link href="#">Adam Smit</Link>
                              </h6>
                              <span className="comment-date">
                                20th May 2020
                              </span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloribus, omnis fugit
                                corporis iste magnam ratione.
                              </p>
                              <Link href="#" className="ltn__comment-reply-btn">
                                <i className="icon-reply-1"></i>Reply
                              </Link>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div className="ltn__comment-item clearfix">
                                <div className="ltn__commenter-img">
                                  <img
                                    src="/img/testimonial/3.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="ltn__commenter-comment">
                                  <h6>
                                    <Link href="#">Adam Smit</Link>
                                  </h6>
                                  <span className="comment-date">
                                    21th May 2020
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Doloribus, omnis fugit
                                    corporis iste magnam ratione.
                                  </p>
                                  <Link
                                    href="#"
                                    className="ltn__comment-reply-btn"
                                  >
                                    <i className="icon-reply-1"></i>Reply
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="ltn__comment-item clearfix">
                            <div className="ltn__commenter-img">
                              <img src="/img/testimonial/4.jpg" alt="Image" />
                            </div>
                            <div className="ltn__commenter-comment">
                              <h6>
                                <Link href="#">Adam Smit</Link>
                              </h6>
                              <span className="comment-date">
                                25th May 2020
                              </span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloribus, omnis fugit
                                corporis iste magnam ratione.
                              </p>
                              <Link href="#" className="ltn__comment-reply-btn">
                                <i className="icon-reply-1"></i>Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  
                  {/* <!-- comment-reply --> */}
                  <div className="ltn__comment-reply-area ltn__form-box mb-60---">
                    <h4 className="title-2">Post Comment</h4>
                    <form action="#">
                      <div className="input-item input-item-textarea ltn__custom-icon">
                        <span className="inline-icon">
                          <FaPencilAlt />
                        </span>
                        <textarea placeholder="Type your comments...."></textarea>
                      </div>
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input type="text" placeholder="Type your name...." />
                        <span className="inline-icon">
                          <FaUserAlt />
                        </span>
                      </div>
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input type="email" placeholder="Type your email...." />
                        <span className="inline-icon">
                          <FaEnvelope />
                        </span>
                      </div>
                      <div className="input-item input-item-website ltn__custom-icon">
                        <input
                          type="text"
                          name="website"
                          placeholder="Type your website...."
                        />
                        <span className="inline-icon">
                          <FaGlobe />
                        </span>
                      </div>
                      <label className="mb-0 input-info-save">
                        <input type="checkbox" name="agree" /> Save my name,
                        email, and website in this browser for the next time I
                        comment.
                      </label>
                      <div className="btn-wrapper">
                        <button
                          className="btn theme-btn-1 btn-effect-1 text-uppercase"
                          type="submit"
                        >
                          <span className="me-2">
                            <FaComments />
                          </span>
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>

              <Col className="col-lg-4 col-md-12">
                <BlogSideBar
                  latestdBlogs={latestdBlogs}
                  topRatedProducts={topRatedProducts}
                  popularProducts={popularProducts}
                  baseUrl="blog"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default BlogtDetails;

export async function getStaticProps({ params }) {
  // get blog data based on slug
  const blog = blogData.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { blog } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on blogs
  const paths = blogData.map((singleBlog) => ({
    params: {
      slug: productSlug(singleBlog.title, {
        lower: true, // convert to lower case, defaults to `false`
      }),
    },
  }));

  return { paths, fallback: false };
}
