import { Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";
import Video from "../component/section/video";


const collectionDataList = [
    {
        id: 1,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/01.jpg',
        link: '#',
        catagory: 'collection-one',
    },
    {
        id: 2,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/02.jpg',
        link: '#',
        catagory: 'collection-two',
    },
    {
        id: 3,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/03.jpg',
        link: '#',
        catagory: 'collection-three',
    },
    {
        id: 4,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/04.jpg',
        link: '#',
        catagory: 'collection-one',
    },
    {
        id: 5,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/05.jpg',
        link: '#',
        catagory: 'collection-two',
    },
    {
        id: 6,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/06.jpg',
        link: '#',
        catagory: 'collection-three',
    },
    {
        id: 7,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/07.jpg',
        link: '#',
        catagory: 'collection-one',
    },
    {
        id: 8,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/08.jpg',
        link: '#',
        catagory: 'collection-two',
    },
    {
        id: 9,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/09.jpg',
        link: '#',
        catagory: 'collection-three',
    },
    {
        id: 10,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/10.jpg',
        link: '#',
        catagory: 'collection-one',
    },
    {
        id: 11,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/11.jpg',
        link: '#',
        catagory: 'collection-two',
    },
    {
        id: 12,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/12.jpg',
        link: '#',
        catagory: 'collection-three',
    },
    {
        id: 13,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/13.jpg',
        link: '#',
        catagory: 'collection-one',
    },
    {
        id: 14,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/14.jpg',
        link: '#',
        catagory: 'collection-two',
    },
    {
        id: 15,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/15.jpg',
        link: '#',
        catagory: 'collection-three',
    },
    {
        id: 16,
        title: 'poker games',
        price: '$1,23,002',
        image: 'assets/images/jaqport/16.jpg',
        link: '#',
        catagory: 'collection-one',
    },
]

const GameList = () => {
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
            <section className="collection-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">  
                            <li onClick={() => setItems(collectionDataList) }>All matches</li>
                            <li onClick={() => filterItem('collection-one') }>today’s matches</li>
                            <li onClick={() => filterItem('collection-two') }>upcoming matches</li>
                            <li onClick={() => filterItem('collection-three') }>matche results</li>
                        </ul>
                        <div className="row g-4 justify-content-center collection-grid">
                            { items.map((elem) => {
                                const { id, title, price, image, link } = elem;
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6 gameListItem" key={id}>
                                        <div className="game__item item-layer">
                                            <div className="game__inner text-center p-0">
                                                <div className="game__thumb mb-0">
                                                    <img src={image} alt={title} className="rounded-3 w-100" />
                                                </div>
                                                <div className="game__overlay">
                                                    <h4>{title}</h4>
                                                    <p>{price}</p>
                                                    <a href={link} className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
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
            <Video />
            <Footer />
        </Fragment>
    );
}

export default GameList;