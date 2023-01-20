import { useState } from "react";

const title = "RELATED OTHER GAMES";
const btnText = "Browse All Matches";


const GameData = [
    {
        imgUrl: 'assets/images/game/01.jpg',
        imgAlt: 'game-img',
        title: 'free poker games',
        desc: 'Catagory: Roulette',
        btnText: 'play now',
        catagory: 'cat-1',
        id: 1,
    },
    {
        imgUrl: 'assets/images/game/02.jpg',
        imgAlt: 'game-img',
        title: 'free poker games',
        desc: 'Catagory: Roulette',
        btnText: 'play now',
        catagory: 'cat-2',
        id: 2,
    },
    {
        imgUrl: 'assets/images/game/03.jpg',
        imgAlt: 'game-img',
        title: 'free poker games',
        desc: 'Catagory: Roulette',
        btnText: 'play now',
        catagory: 'cat-3',
        id: 3,
    },
    {
        imgUrl: 'assets/images/game/04.jpg',
        imgAlt: 'game-img',
        title: 'free poker games',
        desc: 'Catagory: Roulette',
        btnText: 'play now',
        catagory: 'cat-4',
        id: 4,
    },
]

const GameThree = () => {

    const [items, setItems] = useState(GameData);
    const filterItem = (categItem) => {
        const updateItems = GameData.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }

    return (
        <section className="collection-section padding-top padding-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">  
                        <li className="is-checked" data-filter="*">All matches</li>
                        <li data-filter=".collection-one">today’s matches</li>
                        <li data-filter=".collection-two">upcoming matches</li>
                        <li data-filter=".collection-three">matche results</li>
                    </ul>
                    <div className="row g-4 justify-content-center collection-grid">
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-one">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/01.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-two">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/02.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-three">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/03.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-three">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/04.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-one">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/05.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-two">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/06.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-three">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/07.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-two">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/08.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-one">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/09.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-two">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/10.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-three">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/11.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-three">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/12.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-one">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/13.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-two">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/14.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-three">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/15.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 gameListItem collection-one">
                            <div className="game__item item-layer">
                                <div className="game__inner text-center p-0">
                                    <div className="game__thumb mb-0">
                                        <img src="assets/images/jaqport/16.jpg" alt="game-img" className="rounded-3 w-100" />
                                    </div>
                                    <div className="game__overlay">
                                        <h4>poker games</h4>
                                        <p>$1,23,002</p>
                                        <a href="#" className="default-button"><span>play now <i className="icofont-circled-right"></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default GameThree;

