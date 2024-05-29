import { IoArrowDownOutline } from "react-icons/io5";

const LanguageDropDown = function () {
  return (
    <>
      <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
        <ul>
          <li>
            <a href="#" className="dropdown-toggle">
              <span className="active-currency">English</span>
              <span>
                <IoArrowDownOutline />
              </span>
            </a>
            <ul>
              <li>
                <a href="#">Arabic</a>
              </li>
              <li>
                <a href="#">Bengali</a>
              </li>
              <li>
                <a href="#">Chinese</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">French</a>
              </li>
              <li>
                <a href="#">Hindi</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageDropDown;
