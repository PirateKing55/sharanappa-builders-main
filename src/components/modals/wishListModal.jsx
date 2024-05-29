import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
const WishListModal = ({ productData, wishlistShow, wishlistCloseHandle }) => {
  return (
    <>
      <Modal
        show={wishlistShow}
        onHide={wishlistCloseHandle}
        backdrop="static"
        keyboard={false}
        size="md"
        className="ltn__modal-area ltn__add-to-cart-modal-area"
      >
        <Modal.Header>
          <Button
            className="close"
            variant="secondary"
            onClick={wishlistCloseHandle}
          >
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>

        <Modal.Body>
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <Row>
                <Col xs={12}>
                  <div className="modal-product-img">
                    <img src="/img/product/7.png" alt="#" />
                  </div>
                  <div className="modal-product-info">
                    <h5>
                      <Link href="/product-details">3 Rooms Manhattan</Link>
                    </h5>
                    <p className="added-cart">
                      <span>
                        <FaCheckCircle className="me-2" />
                      </span>
                      Successfully added to your Wishlist
                    </p>
                    <div className="btn-wrapper">
                      <Link
                        href="/wishlist"
                        className="theme-btn-1 btn btn-effect-1"
                      >
                        View Wishlist
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WishListModal;
