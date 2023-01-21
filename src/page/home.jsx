import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import Banner from "../component/section/banner";
import Collection from "../component/section/collection";
import CollectionTwo from "../component/section/collection-2";
import Faq from "../component/section/faq";
import Game from "../component/section/game";
import GameTwo from "../component/section/game-2";
import Jaqport from "../component/section/jaqport";
import Testimonial from "../component/section/testimonial";

const Home = () => {
  const { t, i18n } = useTranslation();

 
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
};

export default Home;
