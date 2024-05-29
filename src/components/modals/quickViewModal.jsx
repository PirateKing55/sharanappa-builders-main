import Link from "next/link";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getProductCartQuantity } from "@/lib/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import { addToCompare, deleteFromCompare } from "@/store/slices/compare-slice";

import {
  FaShoppingBag,
  FaRegHeart,
  FaExchangeAlt,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import ProductRating from "../product/ProductRating";

const QuickViewModal = ({
  productData,
  onHide,
  show,
  slug,
  discountedprice,
  productprice,
  wishlistitem,
  compareitem,
}) => {
  const modalClose = () => {
    onHide();
  };

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [selectedProductColor, setSelectedProductColor] = useState(
    productData.variation ? productData.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    productData.variation ? productData.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    productData.variation
      ? productData.variation[0].size[0].stock
      : productData.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    productData,
    selectedProductColor,
    selectedProductSize
  );

  return (
    <Modal
      show={show}
      onHide={modalClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="ltn__modal-area ltn__quick-view-modal-area"
    >
      <Modal.Header>
        <Button className="close" variant="secondary" onClick={modalClose}>
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="ltn__quick-view-modal-inner">
          <div className="modal-product-item">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="modal-product-img">
                  <img src="/img/product/4.png" alt="#" />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="modal-product-info">
                  <h3>
                    <Link onClick={modalClose} href={`/shop/${slug}`}>
                      {productData.title}
                    </Link>
                  </h3>
                  <div className="product-price">
                    <div>
                      <span>${discountedprice}</span>
                      <del>{productprice}</del>
                      <span className="on-sale">
                        {productData.discount} % Off
                      </span>
                    </div>
                    {productData.rating && productData.rating > 0 ? (
                      <div className="product-quickview__rating-wrap">
                        <div className="product-quickview__rating">
                          <ProductRating ratingValue={productData.rating} />
                          <span>({productData.ratingCount})</span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <hr />
                
                  <div className="modal-product-brief">
                    <p>{productData.description.shortDescription}</p>
                  </div>

                  <div className="ltn__product-details-menu-3">
                    <ul>
                      <li>
                        <div className="product-quickview__quantity">
                          <div className="cart-plus-minus">
                            <button
                              onClick={() =>
                                setQuantityCount(
                                  quantityCount > 1 ? quantityCount - 1 : 1
                                )
                              }
                              className="qtybutton"
                            >
                              -
                            </button>
                            <input
                              className="cart-plus-minus-box"
                              type="text"
                              value={quantityCount}
                              readOnly
                            />
                          
                            <button
                              onClick={() =>
                                setQuantityCount(
                                  quantityCount < productStock - productCartQty
                                    ? quantityCount + 1
                                    : quantityCount
                                )
                              }
                              className="qtybutton"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        {productStock && productStock > 0 ? (
                          <button
                            onClick={() =>
                              dispatch(
                                addToCart({
                                  ...productData,
                                  quantity: quantityCount,
                                  selectedProductColor: selectedProductColor
                                    ? selectedProductColor
                                    : product.selectedProductColor
                                    ? product.selectedProductColor
                                    : null,
                                  selectedProductSize: selectedProductSize
                                    ? selectedProductSize
                                    : product.selectedProductSize
                                    ? product.selectedProductSize
                                    : null,
                                })
                              )
                            }
                            disabled={productCartQty >= productStock}
                            className="btn-addtocart"
                          >
                            <FaShoppingBag className="me-2" /> Add To Cart
                          </button>
                        ) : (
                          <button className="btn-addtocart" disabled>
                            Out of Stock
                          </button>
                        )}
                      </li>
                      <li>
                        <button
                          className="btn-addtocart"
                          onClick={
                            wishlistitem !== undefined
                              ? () =>
                                  dispatch(deleteFromWishlist(productData.id))
                              : () => dispatch(addToWishlist(productData))
                          }
                        >
                          <FaRegHeart />
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-addtocart"
                          onClick={
                            compareitem !== undefined
                              ? () =>
                                  dispatch(deleteFromCompare(productData.id))
                              : () => dispatch(addToCompare(productData))
                          }
                        >
                          <FaExchangeAlt />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="ltn__social-media">
                    <ul>
                      <li>Share:</li>
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
                          <FaDribbble />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Instagram">
                          <FaInstagram />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <label className="float-end mb-0">
                    <Link
                      onClick={modalClose}
                      className="text-decoration"
                      href={`/shop/${slug}`}
                    >
                      <small>View Details</small>
                    </Link>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default QuickViewModal;
