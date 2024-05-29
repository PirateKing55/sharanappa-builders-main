import Link from "next/link";

const CallToAction = () => {
  return (
    <>
      <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative">
        <div className="coll-to-info text-color-white">
          <h1>Looking for a dream home?</h1>
          <p>We can help you realize your dream of a new home</p>
        </div>
        <div className="btn-wrapper">
          <Link className="btn btn-effect-3 btn-white" href="contact">
            Explore Properties <i className="icon-next"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
