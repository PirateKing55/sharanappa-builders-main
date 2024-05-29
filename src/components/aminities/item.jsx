import Link from "next/link";

const AminitiesItem = ({data}) => {
  return (
    <>
      <div className="ltn__category-item ltn__category-item-5 text-center">
        <Link href="/shop">
          <span className="category-icon">
            <i className={`${data.icon}`}></i>
          </span>
          <span className="category-title">{data.title}</span>
          <span className="category-btn">
            <i className="flaticon-right-arrow"></i>
          </span>
        </Link>
      </div>
    </>
  );
};

export default AminitiesItem;
