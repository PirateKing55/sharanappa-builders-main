import Link from "next/link";
const Tags = ({ title }) => {
  return (
    <>
      <div className="widget ltn__tagcloud-widget">
        <h4 className="ltn__widget-title ltn__widget-title-border-2">
          {title}
        </h4>
        <ul>
          <li>
            <Link href="#">Popular</Link>
          </li>
          <li>
            <Link href="#">desgin</Link>
          </li>
          <li>
            <Link href="#">ux</Link>
          </li>
          <li>
            <Link href="#">usability</Link>
          </li>
          <li>
            <Link href="#">develop</Link>
          </li>
          <li>
            <Link href="#">icon</Link>
          </li>
          <li>
            <Link href="#">Car</Link>
          </li>
          <li>
            <Link href="#">Service</Link>
          </li>
          <li>
            <Link href="#">Repairs</Link>
          </li>
          <li>
            <Link href="#">Auto Parts</Link>
          </li>
          <li>
            <Link href="#">Oil</Link>
          </li>
          <li>
            <Link href="#">Dealer</Link>
          </li>
          <li>
            <Link href="#">Oil Change</Link>
          </li>
          <li>
            <Link href="#">Body Color</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tags;
