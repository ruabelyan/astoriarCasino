import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";
import AboutTwo from "../component/section/about-2";
import Faq from "../component/section/faq";

const AboutPage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'about Casino'} curPage={'About Us'} />
            <AboutTwo />
            {/* <Game /> */}
            <Faq />
            <Footer />
        </Fragment>
    );
}

export default AboutPage;