import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";

import ScrollToTop from "./component/layout/scrolltop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogSinglePage from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import ForPass from "./page/forpass";
import GameList from "./page/game-list";
import GameListTwo from "./page/game-list2";
import Home from "./page/home";
import HomeTwo from "./page/home-2";
import JaqpotPage from "./page/jaqpot";
import LogIn from "./page/login";
import PartnersPage from "./page/partners";
import PricingPlan from "./page/pricing-plan";
import ShopPage from "./page/shop";
import ShopSinglePage from "./page/shop-single";
import SignUp from "./page/signup";
import TournamentPage from "./page/tournament";

function App() {
 
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="index-2" element={<Home />} />
        <Route path="/" element={<HomeTwo />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="jaqpot" element={<JaqpotPage />} />
        <Route path="game-list" element={<GameList />} />
        <Route path="game-list2" element={<GameListTwo />} />
        <Route path="tournament" element={<TournamentPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="pricing-plan" element={<PricingPlan />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forpass" element={<ForPass />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-2" element={<BlogPageTwo />} />
        <Route path="blog-single" element={<BlogSinglePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop-single" element={<ShopSinglePage />} />
        <Route path="cart-page" element={<CartPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
