import { LayoutOne } from "@/layouts";
import { useState, useEffect } from "react";
import BlogItemTwo from "@/components/blog/blogItemTwo";
import blogData from "@/data/blog";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogSideBar from "@/components/blog/sidebar";
import { useSelector } from "react-redux";
import { getProducts, productSlug } from "@/lib/product";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function BlogRightSideBar() {
  const { products } = useSelector((state) => state.product);
  const featuredBlogs = getProducts(blogData, "buying", "featured", 7);
  const latestdBlogs = getProducts(blogData, "buying", "featured", 4);
  const topRatedProducts = getProducts(products, "buying", "featured", 3);
  const popularProducts = getProducts(products, "buying", "featured", 3);

  const perPageLimit = 6;
  const [currentItems, setCurrentItems] = useState(featuredBlogs);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + perPageLimit;
    setCurrentItems(featuredBlogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(featuredBlogs.length / perPageLimit));
  }, [itemOffset, perPageLimit]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPageLimit) % featuredBlogs.length;
    setItemOffset(newOffset);
  };


  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="News Feeds" sectionPace="" currentSlug="Blog" />

        <div class="ltn__blog-area mb-120">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__blog-list-wrap">
                  {currentItems.map((blog, key) => {
                    const slug = productSlug(blog.title);

                    return (
                      <BlogItemTwo
                        key={key}
                        blogData={blog}
                        slug={slug}
                        baseUrl="/blog/right-sidebar"
                      />
                    );
                  })}
                </div>
                <Row>
              <Col xs={12}>
                <div className="ltn__pagination-area">
                  <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    nextLabel={<FaAngleDoubleRight />}
                    previousLabel={<FaAngleDoubleLeft />}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination ltn__pagination justify-content-center"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                  />
                </div>
              </Col>
            </Row>
              </Col>

              <Col xs={12} lg={{ span: 4, order: 0 }}>
                <BlogSideBar
                  baseUrl="shop"
                  latestdBlogs={latestdBlogs}
                  topRatedProducts={topRatedProducts}
                  popularProducts={popularProducts}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default BlogRightSideBar;
