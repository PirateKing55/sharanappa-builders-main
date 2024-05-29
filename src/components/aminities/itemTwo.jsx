import Link from "next/link";

const AminitiesItemTwo = ({ data }) => {
  return (
    <>
      <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2">
        <Link href="/shop">
          <span className="category-icon">
            <i className={`${data.icon}`}></i>
          </span>
          <span className="category-number">{data.id}</span>
          <span className="category-title">{data.title}</span>
          <span className="category-brief">{data.description}</span>
        </Link>
      </div>
    </>
  );
};

export default AminitiesItemTwo;
