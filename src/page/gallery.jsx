import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";

const blogList = [
  {
    imgUrl: "assets/images/blog/03.jpg",
    imgAlt: "thumbnail",
    title: "Distinctive redefine resource maximizing for",
    desc: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
];

const blogListTwo = [
  {
    imgUrl: "assets/images/blog/01.jpg",
    imgAlt: "thumbnail",
    title: "Distinctive redefine resource maximizing for",
    desc: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
  {
    imgUrl: "assets/images/blog/02.jpg",
    imgAlt: "thumbnail",
    title: "Distinctive redefine resource maximizing for",
    desc: "Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
];

const blogListThree = [
  {
    imgUrl: "assets/images/blog/04.jpg",
    imgAlt: "thumbnail",
    title: "Distinct edeine resour for",
    desc: "Unique proces ariwith tactica ramatica centered quatys vectoris with scenario front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
  {
    imgUrl: "assets/images/blog/05.jpg",
    imgAlt: "thumbnail",
    title: "Distinct edeine resour for",
    desc: "Unique proces ariwith tactica ramatica centered quatys vectoris with scenario front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
  {
    imgUrl: "assets/images/blog/07.jpg",
    imgAlt: "thumbnail",
    title: "Distinct edeine resour for",
    desc: "Unique proces ariwith tactica ramatica centered quatys vectoris with scenario front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
  {
    imgUrl: "assets/images/blog/08.jpg",
    imgAlt: "thumbnail",
    title: "Distinct edeine resour for",
    desc: "Unique proces ariwith tactica ramatica centered quatys vectoris with scenario front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
  {
    imgUrl: "assets/images/blog/06.jpg",
    imgAlt: "thumbnail",
    title: "Distinct edeine resour for",
    desc: "Unique proces ariwith tactica ramatica centered quatys vectoris with scenario front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
  {
    imgUrl: "assets/images/blog/09.jpg",
    imgAlt: "thumbnail",
    title: "Distinct edeine resour for",
    desc: "Unique proces ariwith tactica ramatica centered quatys vectoris with scenario front-end niches after one",
    date: "05 January 2022",
    admin: "Admin",
  },
];

const BlogPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <Header />
      {/* <PageHeader title={t("gallery")} curPage={t("gallery")} /> */}
      <div className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center">
              {blogList.map((val, i) => (
                <div className="col-12" key={i}>
                  <div className="blog-item">
                    <div className="blog-inner d-flex flex-wrap align-items-center">
                      <div className="blog-thumb w-xl-50 w-100">
                        <img
                          src={`${val.imgUrl}`}
                          alt={`${val.imgAlt}`}
                          className="w-100"
                        />
                      </div>
                      <div className="blog-content p-4 w-xl-50 w-100">
                        <Link to="/blog-single">
                          <h4>{val.title}</h4>
                        </Link>
                        <div className="meta-post">
                          <a href="#">{val.admin}</a>
                          <a href="#">{val.date}</a>
                        </div>
                        <p>{val.desc}</p>
                        <Link to="/blog-single" className="default-button">
                          <span>
                            read more <i className="icofont-circled-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {blogListTwo.map((val, i) => (
                <div className="col-lg-6 col-12" key={i}>
                  <div className="blog-item">
                    <div className="blog-inner">
                      <div className="blog-thumb">
                        <img
                          src={`${val.imgUrl}`}
                          alt={`${val.imgAlt}`}
                          className="w-100"
                        />
                      </div>
                      <div className="blog-content px-3 py-4">
                        <Link to="/blog-single">
                          <h4>{val.title}</h4>
                        </Link>
                        <div className="meta-post">
                          <a href="#">{val.admin}</a>
                          <a href="#">{val.date}</a>
                        </div>
                        <p>{val.desc}</p>
                        <Link
                          to="/blog-single"
                          className="default-button reverse-effect"
                        >
                          <span>
                            {t("readMore")}{" "}
                            <i className="icofont-circled-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {blogListThree.map((val, i) => (
                <div className="col-xl-4 col-md-6 col-12" key={i}>
                  <div className="blog-item">
                    <div className="blog-inner">
                      <div className="blog-thumb">
                        <img
                          src={`${val.imgUrl}`}
                          alt={`${val.imgAlt}`}
                          className="w-100"
                        />
                      </div>
                      <div className="blog-content px-3 py-4">
                        <Link to="/blog-single">
                          <h4>{val.title}</h4>
                        </Link>
                        <div className="meta-post">
                          <a href="#">{val.admin}</a>
                          <a href="#">{val.date}</a>
                        </div>
                        <p>{val.desc}</p>
                        <Link to="/blog-single" className="default-button">
                          <span>
                            read more <i className="icofont-circled-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default BlogPage;
