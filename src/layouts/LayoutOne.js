import { Fragment, useState } from "react";
import { HeaderOne } from "@/components/header";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scroll-to-top";

const LayoutOne = ({ children, navPositionClass, topbar }) => {
  const [toggleClassName, SetToggleClassName] = useState(false);

  function toggleClassNameInBody() {
    SetToggleClassName((toggleClassName) => !toggleClassName);
  }

  return (
    <Fragment>
      <div
        className={`body-wrapper ${toggleClassName ? "ltn__utilize-open" : ""}`}
      >
        <HeaderOne
          toggleClassNameInBody={toggleClassNameInBody}
          SetToggleClassName={SetToggleClassName}
          navPositionClass={navPositionClass}
          topbar={topbar}
        />
        {children}
        <Footer />
        <ScrollToTop />
      </div>
    </Fragment>
  );
};

export default LayoutOne;
