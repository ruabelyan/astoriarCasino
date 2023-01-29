import { Fragment } from "react";
import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/header-2";
import About from "../component/section/about";
import BannerTwo from "../component/section/banner-2";
import Faq from "../component/section/faq";

const HomeTwo = () => {
    return (
        <Fragment>
            <HeaderTwo />
            <BannerTwo />
            <About />
            {/* <Collection /> */}
            {/* <Game />
            <GameTwo />*/}
            {/* <JaqportTwo />  */}
            {/* <Testimonial /> */}
            <Faq />
            <Footer />
        </Fragment>
    );
}

export default HomeTwo;