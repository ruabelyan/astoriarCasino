import { Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";

const collectionDataList = [
  {
    id: 1,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/01.jpg",
    link: "#",
    catagory: "match-one",
  },
  {
    id: 2,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/02.jpg",
    link: "#",
    catagory: "match-two",
  },
  {
    id: 3,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/03.jpg",
    link: "#",
    catagory: "match-one",
  },
  {
    id: 4,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/04.jpg",
    link: "#",
    catagory: "match-two",
  },
  {
    id: 5,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/05.jpg",
    link: "#",
    catagory: "match-three",
  },
  {
    id: 6,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/06.jpg",
    link: "#",
    catagory: "match-one",
  },
  {
    id: 7,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/07.jpg",
    link: "#",
    catagory: "match-two",
  },
  {
    id: 8,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/08.jpg",
    link: "#",
    catagory: "match-three",
  },
  {
    id: 9,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/09.jpg",
    link: "#",
    catagory: "match-one",
  },
  {
    id: 10,
    title: "free poker games",
    cate: "Catagory: Roulette",
    image: "assets/images/blog/10.jpg",
    link: "#",
    catagory: "match-three",
  },
];

const GameListTwo = () => {
  const [items, setItems] = useState(collectionDataList);
  const filterItem = (categItem) => {
    const updateItems = collectionDataList.filter((curElem) => {
      return curElem.catagory === categItem;
    });
    setItems(updateItems);
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Gallery"} curPage={"Gallery"} />
      <section className="match-section padding-top padding-bottom">
        <div className="container">
          <div className="section-wrapper">
            <ul className="match-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">
              <li onClick={() => setItems(collectionDataList)}>ՎԻՊ</li>
              <li onClick={() => filterItem("match-one")}>Հիմնական</li>
            </ul>
            <div className="row g-4 match-grid grid">
              {items.map((elem) => {
                const { id, title, cate, image, link } = elem;
                return (
                  <div
                    className="col-lg-4 col-12 matchlistitem match-one"
                    key={id}
                  >
                    <div className="game__item item-layer">
                      <div className="game__inner text-center p-0">
                        <div className="game__thumb mb-0">
                          <img
                            src={image}
                            alt={title}
                            className="rounded-3 w-100"
                          />
                        </div>
                        <div className="game__overlay">
                          {/* <div className="game__overlay-left">
                                                        <h4>{title}</h4>
                                                        <p>{cate}</p>
                                                    </div>
                                                    <div className="game__overlay-right">
                                                        <a href={link} className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                                    </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default GameListTwo;
