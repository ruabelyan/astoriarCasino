import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";

import ScrollToTop from "./component/layout/scrolltop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogSinglePage from "./page/blog-single";
import Gallery from "./page/gallery";
import ContactPage from "./page/contact";
import GameListTwo from "./page/game-list2";
import HomeTwo from "./page/home-2";
import PartnersPage from "./page/partners";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="gallery" element={<GameListTwo />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="jaqpot" element={<JaqpotPage />} /> */}
        {/* <Route path="game-list" element={<GameList />} />
        <Route path="game-list2" element={<GameListTwo />} /> */}
        {/* <Route path="tournament" element={<TournamentPage />} /> */}
        <Route path="partners" element={<PartnersPage />} />
        {/* <Route path="pricing-plan" element={<PricingPlan />} /> */}
        {/* <Route path="login" element={<LogIn />} /> */}
        {/* <Route path="signup" element={<SignUp />} /> */}
        {/* <Route path="forpass" element={<ForPass />} /> */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="blog" element={<Gallery />} />
        <Route path="news" element={<BlogSinglePage />} />
        {/* <Route path="shop" element={<ShopPage />} /> */}
        {/* <Route path="shop-single" element={<ShopSinglePage />} /> */}
        {/* <Route path="cart-page" element={<CartPage />} /> */}
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
