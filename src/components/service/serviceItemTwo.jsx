import Link from "next/link";

const ServiceItemTwo = ({ data, slug }) => {
  return (
    <>
      <div
        className={`ltn__feature-item ltn__feature-item-6 ${
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
            <Link href={`/service/${slug}`}>{data.title}</Link>
          </h4>
          <p>{data.shortDescription}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceItemTwo;
