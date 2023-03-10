import { t } from "i18next";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";
import SelectCountry from "../component/sidebar/select/select-country";
import SelectProvency from "../component/sidebar/select/select-provency";

const ShopCartList = [
  {
    imgUrl: "assets/images/shop/01.jpg",
    imgAlt: "Product Thumb",
    title: "Product Text Here",
    price: "$250",
    totalPrice: "$750",
    delImgUrl: "assets/images/shop/del.png",
    delImgAlt: "Remove Thumb",
  },
  {
    imgUrl: "assets/images/shop/02.jpg",
    imgAlt: "Product Thumb",
    title: "Product Text Here",
    price: "$250",
    totalPrice: "$750",
    delImgUrl: "assets/images/shop/del.png",
    delImgAlt: "Remove Thumb",
  },
  {
    imgUrl: "assets/images/shop/03.jpg",
    imgAlt: "Product Thumb",
    title: "Product Text Here",
    price: "$250",
    totalPrice: "$750",
    delImgUrl: "assets/images/shop/del.png",
    delImgAlt: "Remove Thumb",
  },
  {
    imgUrl: "assets/images/shop/04.jpg",
    imgAlt: "Product Thumb",
    title: "Product Text Here",
    price: "$250",
    totalPrice: "$750",
    delImgUrl: "assets/images/shop/del.png",
    delImgAlt: "Remove Thumb",
  },
  {
    imgUrl: "assets/images/shop/05.jpg",
    imgAlt: "Product Thumb",
    title: "Product Text Here",
    price: "$250",
    totalPrice: "$750",
    delImgUrl: "assets/images/shop/del.png",
    delImgAlt: "Remove Thumb",
  },
];

const CartPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Shop Cart"} curPage={"Shop Cart"} />
      <div className="shop-cart padding-top padding-bottom">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">{t("product")}</th>
                    <th className="cat-price">{t("price")}</th>
                    <th className="cat-quantity">{t("quantity")}</th>
                    <th className="cat-toprice">{t("total")}</th>
                    <th className="cat-edit">{t("edit")}</th>
                  </tr>
                </thead>
                <tbody>
                  {ShopCartList.map((val, i) => (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop-single">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop-single">{val.title}</Link>
                        </div>
                      </td>
                      <td className="cat-price">{val.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div className="dec qtybutton">-</div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            defaultValue="3"
                          />
                          <div className="inc qtybutton">+</div>
                        </div>
                      </td>
                      <td className="cat-toprice">{val.totalPrice}</td>
                      <td className="cat-edit">
                        <a href="#">
                          <img
                            src={`${val.delImgUrl}`}
                            alt={`${val.delImgAlt}`}
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon" action="/">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code..."
                    className="cart-page-input-text"
                  />
                  <button type="submit" className="default-button ms-2 px-4">
                    <span>{t("apply")}</span>
                  </button>
                </form>
                <form className="cart-checkout" action="/">
                  <button type="submit" className="default-button m-2">
                    <span>{t("updateCard")}</span>
                  </button>
                  <button
                    type="submit"
                    className="default-button reverse-effect m-2"
                  >
                    <span>{t("proceedCheckout")}</span>
                  </button>
                </form>
              </div>
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>{t("calcShippings")}</h3>
                      <div className="outline-select">
                        <SelectCountry select={"Bangladesh"} />
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <SelectProvency select={"Dhaka"} />
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Postcode/ZIP"
                        className="cart-page-input-text"
                      />
                      <button
                        type="submit"
                        className="default-button reverse-effect"
                      >
                        <span>{t("updateTotal")}</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>{t("cardTotal")}</h3>
                      <ul className="codex">
                        <li>
                          <span className="pull-left">{t("cardSubTotal")}</span>
                          <p className="pull-right">$ 0.00</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            {t("shippingAndHandling")}
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">{t("orderTotal")}</span>
                          <p className="pull-right">$ 2940.00</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CartPage;
