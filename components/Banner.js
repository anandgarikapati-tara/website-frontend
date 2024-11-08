import Link from "next/link";
const Banner = ({
  title = "Your Ally for Financial Control",
  subTitle = `Ever felt like finance was another
language? We get it! Our mission is to turn
the serious world of finance into a place that’s
friendly, fun, and easy to understand. We’re
here to help you learn without the jargon,
save without the stress, and grow without the
fuss`,
  img = "img/home-2/1.png",
  style = { maxWidth: "135%", transform: "translateX(5%)" },
  dark = false,
}) => {
  return (
    <div className={`mil-banner mil-dissolve ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="mil-banner-text">
              <h1
                className="mil-display mil-text-gradient-3 mil-mb-60"
                style={{ fontSize: "2.5rem" }}
              >
                {title}
              </h1>
              <h6 className="mil-text-gradient-2 mil-mb-20">{subTitle}</h6>

              <div className="mil-buttons-frame">
                <Link href="register" className="mil-btn mil-md mil-add-arrow">
                  Book a Free Consultation{" "}
                </Link>
                {/* <a
                  href="https://www.youtube.com/watch?v=gRhoYxy9Oss"
                  className="mil-btn mil-md mil-light mil-add-play has-popup-video"
                >
                  Watch tutorial
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-banner-img">
              <img src={img} alt="banner" style={style} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

export const PageBanner = ({
  title = "More than a Platform, a Financial Revolution",
  pageName = "About us",
}) => {
  return (
    <div className="mil-banner mil-banner-inner mil-dissolve">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8">
            <div className="mil-banner-text mil-text-center">
              <div className="mil-text-m mil-mb-20">{pageName}</div>
              <h1 className="mil-mb-60">{title}</h1>
              <ul className="mil-breadcrumbs mil-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="#">{pageName}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
