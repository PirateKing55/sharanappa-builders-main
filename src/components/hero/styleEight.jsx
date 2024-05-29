import Link from "next/link";

function HeroSectionStyleEight() {
  return (
    <>
      <div className="ltn__slider-area ltn__slider-6">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          <div
            className="ltn__slide-item-9 ltn__slide-animation-active section-bg-1 bg-image"
            style={{
              backgroundImage: `url("/img/slider/111.jpeg")`,
            }}
          >
            <div className="ltn__slide-item-inner">
              <div className="slide-item-info bg-overlay-white-90 text-center">
                <div className="slide-item-info-inner  ltn__slide-animation">
                  <h1 className="slide-title animated text-uppercase">
                    OUR MODERN LIVING QUARTERS
                  </h1>
                  <h4 className="slide-sub-title text-uppercase animated">
                    SITEWIDE 21% OFF
                  </h4>
                  <div className="btn-wrapper animated">
                    <Link
                      href="/shop"
                      className="theme-btn-1 btn btn-effect-1 text-uppercase"
                    >
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionStyleEight;
