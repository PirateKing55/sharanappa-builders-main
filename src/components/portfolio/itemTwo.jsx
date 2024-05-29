import Link from "next/link";
import { Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
const PortfolioitemTwo = ({ data, baseUrl, slug }) => {
  return (
    <Col
      data-src={`/img/gallery/${data.thumbImage}`}
      xs={12}
      sm={6}
      md={4}
      className="ltn__gallery-item filter_category_3"
    >
      <div className="ltn__gallery-item-inner">
        <div className="ltn__gallery-item-img">
          <img src={`/img/gallery/${data.thumbImage}`} alt="Image" />
          <span className="ltn__gallery-action-icon">
            <span>{<FaArrowRight />}</span>
          </span>
        </div>
        <div className="ltn__gallery-item-info">
          <h4>
            <Link href={`${baseUrl}/${slug}`}>{data.title}</Link>
          </h4>
          <p>{data.designation}</p>
        </div>
      </div>
    </Col>
  );
};

export default PortfolioitemTwo;
