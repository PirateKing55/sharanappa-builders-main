import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
const TeamItem = ({ data, baseUrl, slug, additionalClassname }) => {
  return (
    <>
      <div className={`ltn__team-item ${additionalClassname}`}>
        <div className="team-img">
          <img src={`/img/team/${data.image}`} alt="Image" />
        </div>
        <div className="team-info">
          <h4>
            <Link href={`${baseUrl}/${slug}`}>{data.name}</Link>
          </h4>
          <h6 className="ltn__secondary-color">{data.designation}</h6>
          <div className="ltn__social-media">
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
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItem;
