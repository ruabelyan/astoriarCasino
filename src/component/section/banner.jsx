import { Component } from "react";
import { Link } from 'react-router-dom';

const titleh3 = "the best website";
const titleh2 = "Genuine Money Transaction";
const titleh1 = "Online Casino";
const desc = "Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital";
const btnText = "join us today";


const Banner = () => {
    return (
        <section className="banner" style={{backgroundImage: "url(/assets/images/banner/bg.jpg)"}}>
            <div className="container">
                <div className="row g-0">
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="banner__content">
                            <h3>{titleh3}</h3>
                            <h1>{titleh1}</h1>
                            <h2>{titleh2}</h2>
                            <p>{desc}</p>
                            <Link to="/login" className="default-button"><span>{btnText} <i className="icofont-play-alt-1"></i></span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Banner;