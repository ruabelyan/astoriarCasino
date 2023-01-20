import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Banner from "../component/section/banner";
import Collection from "../component/section/collection";
import CollectionTwo from "../component/section/collection-2";
import Counter from "../component/section/counter";
import Faq from "../component/section/faq";
import Game from "../component/section/game";
import GameTwo from "../component/section/game-2";
import Jaqport from "../component/section/jaqport";
import Testimonial from "../component/section/testimonial";



class Home extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <Banner />
                <Collection />
                <Jaqport />
                <CollectionTwo />
                <Game />
                <Faq />
                <GameTwo />
                <Testimonial />
                <Footer />
            </Fragment>
        );
    }
}
 
export default Home;