import { Fragment } from "react";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/header-2";
import About from "../component/section/about";
import BannerTwo from "../component/section/banner-2";
import Collection from "../component/section/collection";
import Faq from "../component/section/faq";
import Game from "../component/section/game";
import GameTwo from "../component/section/game-2";
import JaqportTwo from "../component/section/jaqport-2";
import Testimonial from "../component/section/testimonial";

const HomeTwo = () => {
    return (
        <Fragment>
            <HeaderTwo />
            <BannerTwo />
            <About />
            <Collection />
            <Game />
            <GameTwo />
            <JaqportTwo />
            <Testimonial />
            <Faq />
            <Footer />
        </Fragment>
    );
}

export default HomeTwo;