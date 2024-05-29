import { Fragment, useState } from "react";
import { HeaderFive } from "@/components/header";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scroll-to-top";

const LayoutSeven = ({ children, navPositionClass, topbar }) => {
  const [toggleClassName, SetToggleClassName] = useState(false);

  function toggleClassNameInBody() {
    SetToggleClassName((toggleClassName) => !toggleClassName);
  }

  return (
    <Fragment>
      <div
        className={`body-wrapper ${toggleClassName ? "ltn__utilize-open" : ""}`}
      >
        <HeaderFive
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

export default LayoutSeven;
