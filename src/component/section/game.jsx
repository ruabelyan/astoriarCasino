import { useState } from "react";

const title = "RELATED OTHER GAMES";
const btnText = "Browse All Matches";

const GameData = [
  {
    imgUrl: "assets/images/game/01.jpg",
    imgAlt: "game-img",
    title: "free poker games",
    desc: "Catagory: Roulette",
    btnText: "play now",
    catagory: "cat-1",
    id: 1,
  },
  {
    imgUrl: "assets/images/game/02.jpg",
    imgAlt: "game-img",
    title: "free poker games",
    desc: "Catagory: Roulette",
    btnText: "play now",
    catagory: "cat-2",
    id: 2,
  },
  {
    imgUrl: "assets/images/game/03.jpg",
    imgAlt: "game-img",
    title: "free poker games",
    desc: "Catagory: Roulette",
    btnText: "play now",
    catagory: "cat-3",
    id: 3,
  },
  {
    imgUrl: "assets/images/game/04.jpg",
    imgAlt: "game-img",
    title: "free poker games",
    desc: "Catagory: Roulette",
    btnText: "play now",
    catagory: "cat-4",
    id: 4,
  },
];

const Game = () => {
  const [items, setItems] = useState(GameData);
  const filterItem = (categItem) => {
    const updateItems = GameData.filter((curElem) => {
      return curElem.catagory === categItem;
    });
    setItems(updateItems);
  };

  return (
    <div
      className="game-section padding-top padding-bottom overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1527406039119-567aa5c2e702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
        </div>
        <ul className="game__filter">
          <li onClick={() => setItems(GameData)}>
            <span className="category">All</span>
          </li>
          <li onClick={() => filterItem("cat-1")}>
            <span className="category">Slots</span>
          </li>
          <li onClick={() => filterItem("cat-2")}>
            <span className="category">Roulette</span>
          </li>
          <li onClick={() => filterItem("cat-3")}>
            <span className="category">Black Jack</span>
          </li>
          <li onClick={() => filterItem("cat-4")}>
            <span className="category">Poker Games</span>
          </li>
        </ul>
        <div className="row g-4 grid">
          {items.map((elem) => {
            const { id, imgUrl, imgAlt, title, desc, btnText, catagory } = elem;
            return (
              <div className="col-lg-6 col-12 cat-1" key={id}>
                <div className="game__item item-layer">
                  <div className="game__inner text-center p-0">
                    <div className="game__thumb mb-0">
                      <img
                        src={imgUrl}
                        alt={imgAlt}
                        className="rounded-3 w-100"
                      />
                    </div>
                    <div className="game__overlay">
                      <div className="game__overlay-left">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                      </div>
                      <div className="game__overlay-right">
                        <a href="#" className="default-button">
                          <span>
                            {btnText} <i className="icofont-circled-right"></i>
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="button-wrapper text-center mt-5">
          <a href="game-list2.html" className="default-button">
            <span>
              {btnText} <i className="icofont-circled-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;
