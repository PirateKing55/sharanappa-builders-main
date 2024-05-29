import Link from "next/link";
import { FaStar } from "react-icons/fa";

const TestimonialCarouselItemTwo = ({ data }) => {
  return (
    <>
      <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
        <div className="ltn__testimoni-info">
          <div className="ltn__testimoni-author-ratting">
            <div className="ltn__testimoni-info-inner">
              <div className="ltn__testimoni-img">
                <img src={`/img/testimonial/${data.img}`} alt="#" />
              </div>
              <div className="ltn__testimoni-name-designation">
                <h5>{data.name}</h5>
                <label>{data.type}</label>
              </div>
            </div>
            <div className="ltn__testimoni-rating">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarouselItemTwo;
