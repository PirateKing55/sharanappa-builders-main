import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:info@webmail.com">
              <FaEnvelope />
              <i></i> info@webmail.com
            </Link>
          </li>
          <li>
            <Link href="/locations">
              <FaMapMarkerAlt />
              15/A, Nest Tower, NYC
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
