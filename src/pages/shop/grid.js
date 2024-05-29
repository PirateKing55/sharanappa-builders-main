import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { getSortedProducts, productSlug,getDiscountPrice } from "@/lib/product";
import { LayoutOne } from "@/layouts";
import {
  FaThLarge,
  FaThList,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import ProductList from "@/components/product/list";
import Search from "@/components/search";
import ReactPaginate from "react-paginate";
import CallToAction from "@/components/callToAction";

function ShopGrid() {
  const { products } = useSelector((state) => state.product);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);
  const pageLimit = 6;
  const [currentItems, setCurrentItems] = useState(products);
  const [pageCount, setPageCount] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };


  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
   
  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);

    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );

    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);

    setCurrentItems(sortedProducts.slice(offset, offset + pageLimit));

    setCurrentItems(
      SearchProduct(sortedProducts.slice(offset, offset + pageLimit))
    );
  }, [
    offset,
    products,
    sortType,
    sortValue,
    filterSortType,
    filterSortValue,
    query,
  ]);

  useEffect(() => {
    const endOffset = offset + pageLimit;
    setCurrentItems(products.slice(offset, endOffset));
    setPageCount(Math.ceil(products.length / pageLimit));
  }, [offset, pageLimit]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % products.length;
    setOffset(newOffset);
  };

  return (
    <LayoutOne topbar={true}>
      {/* <!-- BREADCRUMB AREA START --> */}

      <ShopBreadCrumb
        title="Property Grid"
        sectionPace=""
        currentSlug="Property Grid"
      />
      {/* <!-- BREADCRUMB AREA END -->
    
    <!-- PRODUCT DETAILS AREA START --> */}

      <div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <Tab.Container defaultActiveKey="first">
                <div className="ltn__shop-options">
                  <ul>
                    <li>
                      <div className="ltn__grid-list-tab-menu">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">
                            <FaThLarge />
                          </Nav.Link>
                          <Nav.Link eventKey="second">
                            <FaThList />
                          </Nav.Link>
                        </Nav>
                      </div>
                    </li>

                    <li>
                      <div className="short-by text-center">
                        <Form.Select
                          className="form-control nice-select"
                          onChange={(e) =>
                            getFilterSortParams("filterSort", e.target.value)
                          }
                        >
                          <option value="default">Default</option>
                          <option value="priceHighToLow">
                            Price - High to Low
                          </option>
                          <option value="priceLowToHigh">
                            Price - Low to High
                          </option>
                        </Form.Select>
                      </div>
                    </li>
                    <li>
                      <div className="showing-product-number text-right">
                        <span>
                          {`Showing ${offset + pageLimit} of ${
                            sortedProducts.length
                          } results`}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <Search spaceBottom="mb-30" setQuery={setQuery} />
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <Row>
                        {currentItems.map((product, key) => {
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
                            <Col key={key} xs={12} sm={6} lg={4}>
                              <RelatedProduct
                                slug={slug}
                                baseUrl="shop/grid"
                                productData={product}
                                discountedPrice={discountedPrice}
                                productPrice={productPrice}
                                cartItem={cartItem}
                                wishlistItem={wishlistItem}
                                compareItem={compareItem}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                      <Row>
                        {currentItems.map((product, key) => {
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
                            <Col key={key} xs={12}>
                              <ProductList
                                slug={slug}
                                baseUrl="shop/grid"
                                productData={product}
                                discountedPrice={discountedPrice}
                                productPrice={productPrice}
                                cartItem={cartItem}
                                wishlistItem={wishlistItem}
                                compareItem={compareItem}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <div className="ltn__pagination-area text-center">
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
        </Container>
      </div>
      {/* <!-- PRODUCT DETAILS AREA END -->

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
    </LayoutOne>
  );
}

export default ShopGrid;
