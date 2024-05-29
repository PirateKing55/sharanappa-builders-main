import Link from "next/link";
import { useState } from "react";
import {
  FaPlay,
  FaArrowRight,
  FaArrowLeft,
  FaEye,
  FaRegComments,
  FaRegCalendarAlt,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
const BlogItemTwo = ({ blogData, slug, baseUrl }) => {
  const [isOpen, setOpen] = useState(false);
  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <a>
        <FaArrowLeft />
      </a>
    ),
    nextArrow: (
      <a>
        <FaArrowRight />
      </a>
    ),
  };

  const backgroundImage = blogData.settings.backgroundImage
    ? `{backgroundImage: url("../img/blog/${blogData.backgroundImage}")}`
    : "";

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div
        className={`ltn__blog-item ltn__blog-item-5 ${
          blogData.settings.video
            ? "ltn__blog-item-video"
            : blogData.settings.audio
            ? "ltn__blog-item-audio"
            : blogData.settings.gallery
            ? "ltn__blog-item-gallery"
            : blogData.settings.backgroundNoImage
            ? "ltn__blog-item-no-image"
            : blogData.settings.blockquote
            ? "ltn__blog-item-quote bg-image bg-overlay-theme-90"
            : blogData.settings.backgroundImage
            ? "ltn__blog-item-bg-image bg-image bg-overlay-white-90"
            : ""
        }`}
      >
        {blogData.settings.video ? (
          <div className="ltn__video-img">
            <img src={`/img/blog/${blogData.thumbImg}`} alt={blogData.title} />
            <button onClick={() => setOpen(true)} className="ltn__video-icon-2">
              <FaPlay />
            </button>
          </div>
        ) : (
          ""
        )}
        {blogData.settings.audio ? (
          <div className="post-audio embed-responsive embed-responsive-16by9">
            <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/837045328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
        ) : (
          ""
        )}
        {blogData.settings.gallery ? (
          <Slider
            {...blogSettings}
            className="ltn__blog-gallery-active slick-arrow-1 slick-arrow-1-inner"
          >
            {blogData.galleryImageList.map((gallery, key) => {
              return (
                <div key={key} className="ltn__blog-gallery-item">
                  <Link href={`${baseUrl}/${slug}`}>
                    <img src={`/img/blog/${gallery.img}`} alt="Image" />
                  </Link>
                </div>
              );
            })}
          </Slider>
        ) : (
          ""
        )}
        {blogData.settings.thumbNail ? (
          <div className="ltn__blog-img">
            <Link href={`${baseUrl}/${slug}`}>
              <img
                src={`/img/blog/${blogData.thumbImg}`}
                alt={blogData.title}
              />
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className="ltn__blog-brief">
          {blogData.settings.blockquote ? (
            <blockquote>
              <Link href={`${baseUrl}/${slug}`}>
                Excepteur sint occaecat cupida tat non proident, sunt in.
              </Link>
            </blockquote>
          ) : (
            ""
          )}

          {blogData.settings.categories ? (
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-category">
                  <Link href="#">{blogData.type}</Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}

          {blogData.settings.blockquote ? (
            ""
          ) : (
            <h3 className="ltn__blog-title">
              <Link href={`${baseUrl}/${slug}`}>{blogData.title}</Link>
            </h3>
          )}
          <div className="ltn__blog-meta">
            <ul>
              <li>
                <Link href="#">
                  <FaEye />
                  <span>{blogData.views}</span> Views
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaRegComments />
                  <span>{blogData.comments}</span>
                  Comments
                </Link>
              </li>
              <li className="ltn__blog-date">
                <FaRegCalendarAlt />
                <span>{blogData.date}</span>
              </li>
            </ul>
          </div>

          {blogData.settings.description ? (
            <p>{blogData.shortDescription}</p>
          ) : (
            ""
          )}

          {blogData.settings.author ? (
            <div className="ltn__blog-meta-btn">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-author">
                    <Link href="#">
                      <img
                        src={`/img/blog/${blogData.author.img}`}
                        alt={`${blogData.author.name}`}
                      />
                      By: {blogData.author.name}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="ltn__blog-btn">
                <Link href={`${baseUrl}/${slug}`}>
                  <span>
                    <FaArrowRight />
                  </span>
                  Read more
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default BlogItemTwo;
