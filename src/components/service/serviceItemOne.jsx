import Link from "next/link";

const ServiceItemOne = ({ data, slug, ltn__service }) => {
  
  return (
    <>
      <div
        className={`ltn__feature-item ltn__feature-item-6 text-center ${
          data.active ? "active" : ""
        }`}
      >
        <div className="ltn__feature-icon">
          <span>
            <i className={data.icon}></i>
          </span>
        </div>
        <div className="ltn__feature-info">
          <h4>
            <Link href="/service">{data.title}</Link>
          </h4>
          <p>{data.description}</p>
          {ltn__service ? (
            <Link className="ltn__service-btn" href="/service">
              Read More
            </Link>
          ) : (
            ""
          )}
          <Link className="ltn__service-btn" href={slug}>
            Read More <i className="flaticon-right-arrow"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceItemOne;
