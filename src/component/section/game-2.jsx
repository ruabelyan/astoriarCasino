
import { Link } from "react-router-dom";

const title = "UNLOCK FREE SPIN";
const desc = "Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then ussertively communcate an expanded array of mindshare rather think wiverse technologies for magnetic applications eamlessly virtual that conveniently monetize synergistic human capital";
const btnText = "Browse All Matches";


const GameTwo = () => {
    return (
        <div className="game game-style3 overflow-hidden" style={{backgroundImage: "url(/assets/images/game/bg.jpg)"}}>
            <div className="container">
                <div className="section-wrapper">
                    <div className="row justify-content-center g-4 align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="game__thumb">
                                <img src="assets/images/game/08.png" alt="game-thumb" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="game__content">
                                <div className="section-header text-start">
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                    <Link to="/game-list" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default GameTwo;