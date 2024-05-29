import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} from "@/store/slices/cart-slice";
import { getDiscountPrice, cartItemStock, productSlug } from "@/lib/product";
import Link from "next/link";

const Cart = () => {
  const [quantityCount] = useState(1);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;


  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}
        <ShopBreadCrumb title="Cart" sectionPace="" currentSlug="Cart" />
        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- SHOPING CART AREA START --> */}
        <div className="liton__shoping-cart-area mb-120">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-12">
                  <div className="shoping-cart-inner">
                    <div className="shoping-cart-table table-responsive">
                      <table className="table">
                        <tbody>
                          {cartItems.map((product, key) => {
                            let imageCount = key + 1;
                            const slug = productSlug(product.title);
                            const discountedPrice = getDiscountPrice(
                              product.price,
                              product.discount
                            ).toFixed(2);

                            cartTotalPrice +=
                              discountedPrice * product.quantity;
                            return (
                              <tr key={key}>
                                <td className="cart-product-remove">
                                  <span
                                    onClick={() =>
                                      dispatch(
                                        deleteFromCart(product.cartItemId)
                                      )
                                    }
                                  >
                                    x
                                  </span>
                                </td>
                                <td className="cart-product-image">
                                  <Link href={`/shop/${slug}`}>
                                    <img
                                      src={`/img/product/${imageCount}.png`}
                                      alt="#"
                                    />
                                  </Link>
                                </td>
                                <td className="cart-product-info">
                                  <h4>
                                    <Link href={`/shop/${slug}`}>
                                      {product.title}
                                    </Link>
                                  </h4>
                                </td>
                                <td className="cart-product-price">
                                  ${discountedPrice}
                                </td>
                                <td className="cart-product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      onClick={() =>
                                        dispatch(decreaseQuantity(product))
                                      }
                                      className="qtybutton"
                                    >
                                      -
                                    </button>
                                    <input
                                      value={product.quantity}
                                      readOnly
                                      name="qtybutton"
                                      className="cart-plus-minus-box"
                                    />
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          addToCart({
                                            ...product,
                                            quantity: quantityCount,
                                          })
                                        )
                                      }
                                      className="qtybutton"
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="cart-product-subtotal">
                                  $
                                  {(discountedPrice * product.quantity).toFixed(
                                    2
                                  )}
                                </td>
                              </tr>
                            );
                          })}

                          <tr className="cart-coupon-row">
                            <td colSpan="6">
                              <div className="cart-coupon">
                                <input
                                  type="text"
                                  name="cart-coupon"
                                  placeholder="Coupon code"
                                />
                                <button
                                  type="submit"
                                  className="btn theme-btn-2 btn-effect-2"
                                >
                                  Apply Coupon
                                </button>
                              </div>
                            </td>
                            <td>
                              <button
                                type="submit"
                                onClick={() => dispatch(deleteAllFromCart())}
                                className="btn theme-btn-2 btn-effect-2"
                              >
                                Clear
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="shoping-cart-total mt-50">
                      <h4>Cart Totals</h4>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Cart Subtotal</td>
                            <td>${cartTotalPrice.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Shipping</td>
                            <td>Free Shipping</td>
                          </tr>
                          <tr>
                            <td>Vat</td>
                            <td>No</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Order Total</strong>
                            </td>
                            <td>
                              <strong>${cartTotalPrice.toFixed(2)}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="btn-wrapper text-right">
                        <Link
                          href="/checkout"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p>No items found in cart</p>
                <Link
                  href="/shop"
                  className="theme-btn-1 btn btn-effect-1"
                >
                  Shop Now
                </Link>
              </div>
            )}
          </div>
        </div>


        {/* <!-- SHOPING CART AREA END --> */}

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
};

export default Cart;
