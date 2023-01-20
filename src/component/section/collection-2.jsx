import { Component } from "react";

const title = "BE IN CONTROL";
const desc = "At Modeltheme, we show only the best websites and portfolios built completely with passion, simplicity and creativity !";


const collectionList = [
    {
        imgUrl: 'assets/images/game/04.png',
        imgAlt: 'game-img',
        title: 'PAYMENT LIMITATION',
        desc: 'Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound',
    },
    {
        imgUrl: 'assets/images/game/05.png',
        imgAlt: 'game-img',
        title: 'Great Solutions',
        desc: 'Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound',
    },
    {
        imgUrl: 'assets/images/game/06.png',
        imgAlt: 'game-img',
        title: 'Support in Person',
        desc: 'Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound',
    },
    {
        imgUrl: 'assets/images/game/07.png',
        imgAlt: 'game-img',
        title: 'Support in Person',
        desc: 'Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound',
    },
]

const CollectionTwo = () => {
    return (
        <section className="collection-section padding-top padding-bottom">
            <div className="container">
                <div className="section-header">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="section-wrapper game game-style2">
                    <div className="row g-4 justify-content-center">
                        {collectionList.map((val, i) => (
                            <div className="col-lg-6 col-12" key={i}>
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
}
 
export default CollectionTwo;