import Link from "next/link";
const PortfolioitemThree = ({ data, baseUrl, slug }) => {
  return (
    <div className="ltn__img-slide-item-4">
      <Link href={`${baseUrl}/${slug}`}>
        <img src={`/img/img-slide/${data.img}`} alt="Image" />
      </Link>
      <div className="ltn__img-slide-info">
        <div className="ltn__img-slide-info-brief">
          <h6>{data.title}</h6>
          <h1>
            <Link href={`${baseUrl}/${slug}`}>{data.designation} </Link>
          </h1>
        </div>
        <div className="btn-wrapper">
          <Link
            href={`${baseUrl}/${slug}`}
            className="btn theme-btn-1 btn-effect-1 text-uppercase"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioitemThree;
