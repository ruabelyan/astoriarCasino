import { Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/page-header";



const collectionDataList = [
    {
        id: 1,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/01.jpg',
        link: '#',
        catagory: 'match-one',
    },
    {
        id: 2,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/02.jpg',
        link: '#',
        catagory: 'match-two',
    },
    {
        id: 3,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/03.jpg',
        link: '#',
        catagory: 'match-one',
    },
    {
        id: 4,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/04.jpg',
        link: '#',
        catagory: 'match-two',
    },
    {
        id: 5,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/05.jpg',
        link: '#',
        catagory: 'match-three',
    },
    {
        id: 6,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/06.jpg',
        link: '#',
        catagory: 'match-one',
    },
    {
        id: 7,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/07.jpg',
        link: '#',
        catagory: 'match-two',
    },
    {
        id: 8,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/08.jpg',
        link: '#',
        catagory: 'match-three',
    },
    {
        id: 9,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/09.jpg',
        link: '#',
        catagory: 'match-one',
    },
    {
        id: 10,
        title: 'free poker games',
        cate: 'Catagory: Roulette',
        image: 'assets/images/game/10.jpg',
        link: '#',
        catagory: 'match-three',
    },
]

const GameListTwo = () => {
    const [items, setItems] = useState(collectionDataList);
    const filterItem = (categItem) => {
        const updateItems = collectionDataList.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }

    return (
        <Fragment>
            <Header />
            <PageHeader title={'most popular game'} curPage={'matche'} />
            <section className="match-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <ul className="match-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">  
                            <li onClick={() => setItems(collectionDataList) }>All matches</li>
                            <li onClick={() => filterItem('match-one') }>today’s matches</li>
                            <li onClick={() => filterItem('match-two') }>upcoming matches</li>
                            <li onClick={() => filterItem('match-three') }>matche results</li>
                        </ul>
                        <div className="row g-4 match-grid grid">
                            { items.map((elem) => {
                                const { id, title, cate, image, link } = elem;
                                return (
                                    <div className="col-lg-6 col-12 matchlistitem match-one" key={id}>
                                        <div className="game__item item-layer">
                                            <div className="game__inner text-center p-0">
                                                <div className="game__thumb mb-0">
                                                    <img src={image} alt={title} className="rounded-3 w-100" />
                                                </div>
                                                <div className="game__overlay">
                                                    <div className="game__overlay-left">
                                                        <h4>{title}</h4>
                                                        <p>{cate}</p>
                                                    </div>
                                                    <div className="game__overlay-right">
                                                        <a href={link} className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) } 
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default GameListTwo;