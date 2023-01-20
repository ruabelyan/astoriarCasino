
import {Link} from "react-router-dom";
import CountDown from "../layout/countdown";

const title = "CASINO JACKPOTS";
const desc = "At Modeltheme, we show only the best websites and portfolios built completely with passion, simplicity and creativity !";
const winTitle = "top winners list";
const btnText = "View All";
const upTitle = "UPCOMING JACKPOTS";
const runTitle = "RUNNING JACKPOTS";
const runBtnText = "browse all games";


const jaqportGameList = [
    {
        imgUrl: 'assets/images/jaqport/country/01.jpg',
        imgAlt: 'jaqport-thumb',
        name: '1.Christopher',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/02.jpg',
        imgAlt: 'jaqport-thumb',
        name: '2.Mark',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/03.jpg',
        imgAlt: 'jaqport-thumb',
        name: '3.Craigr',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/04.jpg',
        imgAlt: 'jaqport-thumb',
        name: '4.Philip',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/05.jpg',
        imgAlt: 'jaqport-thumb',
        name: '5.Jimmy',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/06.jpg',
        imgAlt: 'jaqport-thumb',
        name: '6.Arthur',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/07.jpg',
        imgAlt: 'jaqport-thumb',
        name: '7.Jaime',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/08.jpg',
        imgAlt: 'jaqport-thumb',
        name: '8.Perry',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/09.jpg',
        imgAlt: 'jaqport-thumb',
        name: '9.Harold',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/10.jpg',
        imgAlt: 'jaqport-thumb',
        name: '10.Jerry',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/11.jpg',
        imgAlt: 'jaqport-thumb',
        name: '11.Shawn',
        rate: '$2365.96',
    },
    {
        imgUrl: 'assets/images/jaqport/country/12.jpg',
        imgAlt: 'jaqport-thumb',
        name: '12.Walter',
        rate: '$2365.96',
    },
]

const gameList = [
    {
        imgUrl: 'assets/images/jaqport/01.jpg',
        imgAlt: 'game-img',
        name: 'poker games',
        rate: '$1,23,002',
        btnText: 'play now',
    },
    {
        imgUrl: 'assets/images/jaqport/02.jpg',
        imgAlt: 'game-img',
        name: 'poker games',
        rate: '$1,23,002',
        btnText: 'play now',
    },
    {
        imgUrl: 'assets/images/jaqport/03.jpg',
        imgAlt: 'game-img',
        name: 'poker games',
        rate: '$1,23,002',
        btnText: 'play now',
    },
]

const gameListTwo = [
    {
        imgUrl: 'assets/images/jaqport/04.jpg',
        imgAlt: 'game-img',
        name: 'poker games',
        rate: '$1,23,002',
        btnText: 'play now',
    },
    {
        imgUrl: 'assets/images/jaqport/05.jpg',
        imgAlt: 'game-img',
        name: 'poker games',
        rate: '$1,23,002',
        btnText: 'play now',
    },
    {
        imgUrl: 'assets/images/jaqport/06.jpg',
        imgAlt: 'game-img',
        name: 'poker games',
        rate: '$1,23,002',
        btnText: 'play now',
    },
]

const Jaqport = () => {
    return (
        <div className="jaqport padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/jaqport/jaqport-bg.jpg)"}}>
            <div className="container">
                <div className="section-header">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="jaqport__left">
                                <div className="jaqport__title">
                                    <div className="jaqport__title-title">
                                        <h4>{winTitle}</h4>
                                    </div>
                                    <div className="jaqport__title-button">
                                        <Link to="/jaqpot" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span></Link>
                                    </div>
                                </div>
                                <div className="jaqport__body">
                                    <ul>
                                        {jaqportGameList.map((val, i) => (
                                            <li className="jaqport__gamelist" key={i}>
                                                <div className="jaqport__gamelist-left">
                                                    <p>{val.name}</p>
                                                </div>
                                                <div className="jaqport__gamelist-middle">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="rounded-circle" />
                                                </div>
                                                <div className="jaqport__gamelist-right">
                                                    <h6>{val.rate}</h6>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="jaqport__right">
                                <div className="jaqport__top">
                                    <div className="jaqport__title">
                                        <div className="jaqport__title-title">
                                            <h4>{upTitle}</h4>
                                        </div>
                                        <div className="jaqport__title-gametime">
                                            <CountDown />
                                        </div>
                                    </div>
                                    <div className="jaqport__body">
                                        <div className="row g-4 justify-content-center">
                                            {gameList.map((val, i) => (
                                                <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                                    <div className="game__item item-layer">
                                                        <div className="game__inner text-center p-0">
                                                            <div className="game__thumb mb-0">
                                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="rounded-3 w-100" />
                                                            </div>
                                                            <div className="game__overlay">
                                                                <h4>{val.name}</h4>
                                                                <p>{val.rate}</p>
                                                                <a href="#" className="default-button"><span>{val.btnText} <i className="icofont-circled-right"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="jaqport__bottom">
                                    <div className="jaqport__title">
                                        <div className="jaqport__title-title">
                                            <h4>{runTitle}</h4>
                                        </div>
                                        <div className="jaqport__title-button">
                                            <Link to="/game-list" className="default-button"><span>{runBtnText} <i className="icofont-circled-right"></i></span></Link>
                                        </div>
                                    </div>
                                    <div className="jaqport__body">
                                        <div className="row g-4 justify-content-center">
                                            {gameListTwo.map((val, i) => (
                                                <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                                    <div className="game__item item-layer">
                                                        <div className="game__inner text-center p-0">
                                                            <div className="game__thumb mb-0">
                                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="rounded-3 w-100" />
                                                            </div>
                                                            <div className="game__overlay">
                                                                <h4>{val.name}</h4>
                                                                <p>{val.rate}</p>
                                                                <a href="#" className="default-button"><span>{val.btnText} <i className="icofont-circled-right"></i></span> </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Jaqport;