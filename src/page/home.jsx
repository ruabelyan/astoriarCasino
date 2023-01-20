import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
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

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Fragment>
      <h1>{t("Welcome to React")}</h1>
      <select
        onChange={(e) => changeLanguageHandler(e.target.value)}
        className="form-select"
        defaultValue={"en"}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="arm">ARM</option>
      </select>
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
