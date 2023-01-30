import { useTranslation } from "react-i18next";

const Collection = () => {
    const { t, i18n } = useTranslation();


  const title = t("welcomeToCasino");

  const collectionList = [
    {
      imgUrl: "assets/images/game/01.png",
      imgAlt: "game-img",
      title: "Advice And Guide",
      desc: "Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound",
    },
    {
      imgUrl: "assets/images/game/02.png",
      imgAlt: "game-img",
      title: "Great Solutions",
      desc: "Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound",
    },
    {
      imgUrl: "assets/images/game/03.png",
      imgAlt: "game-img",
      title: "Support in Person",
      desc: "Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound",
    },
  ];
  return (
    <section className="collection-section padding-top padding-bottom">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
        </div>
        <div className="section-wrapper game">
          <div className="row g-4 justify-content-center">
            {collectionList.map((val, i) => (
              <div className="col-lg-4 col-sm-6 col-12" key={i}>
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="game__content">
                      <h4>{val.title}</h4>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
