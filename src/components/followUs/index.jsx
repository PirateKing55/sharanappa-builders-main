import Link from "next/link";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const FollowUs = ({ title }) => {
  return (
    <>
      <div className="widget ltn__social-media-widget">
        <h4 className="ltn__widget-title ltn__widget-title-border-2">
          {title}
        </h4>
        <div className="ltn__social-media-2">
          <ul>
            <li>
              <Link href="#">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaDribbble />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
