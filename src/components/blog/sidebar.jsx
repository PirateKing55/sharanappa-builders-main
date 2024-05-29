import Link from "next/link";
import Slider from "react-slick";
import {
  FaStar,
  FaSearch,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCalendarAlt,
} from "react-icons/fa";
import { productSlug, getDiscountPrice } from "@/lib/product";
import FollowUs from "@/components/followUs";
import Tags from "@/components/tags";

const BlogSideBar = ({ popularProducts, topRatedProducts, latestdBlogs }) => {
  const product = popularProducts[0];
  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };

  return (
    <>
      <aside className="sidebar-area blog-sidebar">
        {/* <!-- Author Widget --> */}
        <div className="widget ltn__author-widget">
          <div className="ltn__author-widget-inner text-center">
            <img
              src={`/img/team/${product.agent.img}`}
              alt={`${product.agent.fullName}`}
            />
            <h5>{product.agent.fullName}</h5>
            <small>{product.agent.designation}</small>
            <div className="product-ratting">
              <ul>
                <li>
                  <Link href="#">
                    <FaStar />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaStar />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaStar />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaStar />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaRegStar />
                  </Link>
                </li>
                <li className="review-total">
                  <Link href="#">( {product.agent.raiting} Reviews )</Link>
                </li>
              </ul>
            </div>
            <p>{product.agent.description}</p>

            <div className="ltn__social-media">
              <ul>
                <li>
                  <Link href="#" title="Facebook">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#" title="Twitter">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#" title="Linkedin">
                    <FaInstagram />
                  </Link>
                </li>

                <li>
                  <Link href="#" title="Youtube">
                    <FaDribbble />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Search Widget --> */}
        <div className="widget ltn__search-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Search Objects
          </h4>
          <form action="#">
            <input
              type="text"
              name="search"
              placeholder="Search your keyword..."
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        {/* <!-- Form Widget --> */}
        <div className="widget ltn__form-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Drop Messege For Book
          </h4>
          <form action="#">
            <input type="text" name="yourname" placeholder="Your Name*" />
            <input type="text" name="youremail" placeholder="Your e-Mail*" />
            <textarea
              name="yourmessage"
              placeholder="Write Message..."
            ></textarea>
            <button type="submit" className="btn theme-btn-1">
              Send Messege
            </button>
          </form>
        </div>
        {/* <!-- Top Rated Product Widget --> */}
        <div className="widget ltn__top-rated-product-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Top Rated Product
          </h4>
          <ul>
            {topRatedProducts.map((product, keys) => {
              const slug = productSlug(product.title);
              let key = keys + 1;
              return (
                <li key={product.id}>
                  <div className="top-rated-product-item clearfix">
                    <div className="top-rated-product-img">
                      <Link href={`/shop/${slug}`}>
                        <img
                          src={`/img/product/${key}.png`}
                          alt={product.title}
                        />
                      </Link>
                    </div>
                    <div className="top-rated-product-info">
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaStar />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h6>
                        <Link href={`/shop/${slug}`}>{product.title}</Link>
                      </h6>
                      <div className="product-price">
                        <span>${product.price}</span>
                        <del>${discountedPrice}</del>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <!-- Menu Widget (Category) --> */}
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Top Categories
          </h4>
          <ul>
            <li>
              <Link href="#">
                Apartments <span>(26)</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Picture Stodio <span>(30)</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Office <span>(71)</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Luxary Vilas <span>(56)</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Duplex House <span>(60)</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Popular Product Widget --> */}
        <div className="widget ltn__popular-product-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Popular Properties
          </h4>

          <Slider
            {...popular_product}
            className="row ltn__popular-product-widget-active slick-arrow-1"
          >
            {/* <!-- ltn__product-item --> */}

            {popularProducts.map((product, key) => {
              const slug = productSlug(product.title);
              return (
                <div
                  key={key}
                  className="ltn__product-item ltn__product-item-4 ltn__product-item-5"
                >
                  <div className="product-img">
                    <Link href={`/shop/${slug}`}>
                      <img
                        src={`/img/product-3/${product.productImg}`}
                        alt={slug}
                      />
                    </Link>
                    <div className="real-estate-agent">
                      <div className="agent-img">
                        <Link href="#">
                          <img src={`/img/blog/author.jpg`} alt="#" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-price">
                      <span>
                        ${product.price}
                        <label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title">
                      <Link href={`/shop/${slug}`}>{product.title}</Link>
                    </h2>
                    <div className="product-img-location">
                      <ul>
                        <li>
                          <Link href="/product-details">
                            <i className="flaticon-pin"></i>
                            {product.locantion}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                      <li>
                        <span>{product.propertyDetails.bedrooms}</span>
                        <span className="ms-1">Bedrooms</span>
                      </li>
                      <li>
                        <span>{product.propertyDetails.baths}</span>
                        <span className="ms-1">Bathrooms</span>
                      </li>
                      <li>
                        <span>{product.propertyDetails.area}</span>
                        <span className="ms-1">square Ft</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {/* <!-- Popular Post Widget --> */}
        <div className="widget ltn__popular-post-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Leatest Blogs
          </h4>
          <ul>
            {latestdBlogs.map((blog, key) => {
              const slug = productSlug(blog.title);
              let imagecount = key + 1;

              return (
                <li key={key}>
                  <div className="popular-post-widget-item clearfix">
                    <div className="popular-post-widget-img">
                      <Link href={`/blog/${slug}`}>
                        <img src={`/img/team/${imagecount}.jpg`} alt="#" />
                      </Link>
                    </div>
                    <div className="popular-post-widget-brief">
                      <h6>
                        <Link href={`/blog/${slug}`}>{blog.title}</Link>
                      </h6>
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <Link href={`/blog/${slug}`}>
                              <span>
                                <FaCalendarAlt />
                              </span>
                              <span> {blog.date}</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="widget ltn__popular-post-widget ltn__twitter-post-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border-2">
            Twitter Feeds
          </h4>
          <ul>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <Link href="/blog-details">
                    <span>
                      <FaTwitter />
                    </span>
                  </Link>
                </div>
                <div className="popular-post-widget-brief">
                  <p>
                    Carsafe - #Gutenberg ready @wordpress Theme for Car Service,
                    Auto Parts, Car Dealer available on @website
                    <Link href="https://website.net">https://website.net</Link>
                  </p>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <Link href="#">
                          <span>
                            <FaCalendarAlt />
                          </span>
                          June 22, 2020
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <Link href="/blog-details">
                    <span>
                      <FaTwitter />
                    </span>
                  </Link>
                </div>
                <div className="popular-post-widget-brief">
                  <p>
                    Carsafe - #Gutenberg ready @wordpress Theme for Car Service,
                    Auto Parts, Car Dealer available on @website
                    <Link href="https://website.net">https://website.net</Link>
                  </p>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <Link href="#">
                          <span>
                            <FaCalendarAlt />
                          </span>
                          June 22, 2020
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <Link href="/blog-details">
                    <span>
                      <FaTwitter />
                    </span>
                  </Link>
                </div>
                <div className="popular-post-widget-brief">
                  <p>
                    Carsafe - #Gutenberg ready @wordpress Theme for Car Service,
                    Auto Parts, Car Dealer available on @website
                    <Link href="https://website.net">https://website.net</Link>
                  </p>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <Link href="#">
                          <span>
                            <FaCalendarAlt />
                          </span>
                          June 22, 2020
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <FollowUs title="Follow Us" />

        {/* <!-- Tagcloud Widget --> */}

        <Tags title="Popular Tags" />
      </aside>
    </>
  );
};

export default BlogSideBar;
