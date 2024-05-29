import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import { useDispatch, useSelector } from "react-redux";
import { productSlug, getDiscountPrice } from "@/lib/product";
import { addToCart, } from "@/store/slices/cart-slice";
import { deleteFromWishlist } from "@/store/slices/wishlist-slice"

const Wishlist = () => {

    const dispatch = useDispatch();
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const [quantityCount] = useState(1);
    let cartTotalPrice = 0;
    return (
        <>
            <LayoutOne topbar={true}>
                {/* <!-- BREADCRUMB AREA START --> */}
                <ShopBreadCrumb title="Wishlist" sectionPace="" currentSlug="wishlist" />
                {/* <!-- BREADCRUMB AREA END --> */}

                {/* <!-- WISHLIST AREA START --> */}
                <div class="liton__wishlist-area mb-105">
                    <Container>

                        {wishlistItems && wishlistItems.length >= 1 ? (
                            <Row>
                                <Col lg={12}>
                                    <div class="shoping-cart-inner">
                                        <div class="shoping-cart-table table-responsive">
                                            <table class="table">
                                                <tbody>

                                                    {wishlistItems.map((product, key) => {

                                                        let imageCount = key + 1;
                                                        const slug = productSlug(product.title);
                                                        const discountedPrice = getDiscountPrice(
                                                            product.price,
                                                            product.discount
                                                        ).toFixed(2);

                                                        cartTotalPrice +=
                                                            discountedPrice * product.quantity;
                                                        return (<tr key={key}>
                                                            <td class="cart-product-remove">
                                                                <span
                                                                    onClick={() =>
                                                                        dispatch(deleteFromWishlist(product.id))
                                                                    }
                                                                >
                                                                    x
                                                                </span>
                                                            </td>
                                                            <td class="cart-product-image">
                                                                <Link href={`/shop/${slug}`}><img src={`/img/product/${imageCount}.png`} alt="#" /></Link>
                                                            </td>
                                                            <td class="cart-product-info">
                                                                <h4><Link href={`/shop/${slug}`}>{product.title}</Link></h4>
                                                            </td>
                                                            <td class="cart-product-price"> ${discountedPrice}</td>
                                                            <td class="cart-product-stock">In Stock</td>
                                                            <td class="cart-product-add-cart">
                                                                <button class="submit-button-1" onClick={() =>
                                                                    dispatch(
                                                                        addToCart({
                                                                            ...product,
                                                                            quantity: quantityCount,
                                                                        })
                                                                    )
                                                                }>Add to Cart</button>
                                                            </td>
                                                        </tr>)
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </Col>
                            </Row>) : (<div className="text-center">
                                <p>No items found in wishlist</p>
                                <Link
                                    href="/shop"
                                    className="theme-btn-1 btn btn-effect-1"
                                >
                                    Shop Now
                                </Link>
                            </div>)}

                    </Container>
                </div>
                {/* <!-- WISHLIST AREA START --> */}

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

export default Wishlist;
