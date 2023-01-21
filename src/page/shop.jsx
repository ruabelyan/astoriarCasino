import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/layout/footer'
import Header from '../component/layout/header-2'
import PageHeader from '../component/layout/page-header'
import PaginationTwo from '../component/sidebar/pagination-2'
import Rating from '../component/sidebar/rating'
import RecentProduct from '../component/sidebar/widget/recent-product'
import SearchWidget from '../component/sidebar/widget/search-widget'
import ShopcateWidget from '../component/sidebar/widget/shopcate-widget'

const showing = "Showing 01 - 12 of 139 Results";

const productList = [
    {
        imgUrl: 'assets/images/shop/01.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/02.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/04.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/05.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/06.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/07.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/08.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/09.jpg',
        imgAlt: 'shop thumb',
        title: 'Product Title Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        price: '$200.00',
    },
]

const ShopPage = () => {
    const [GridList, setGridList] = useState(true);

    return (
        <Fragment>
            <Header />
            <PageHeader title={'Shop Page'} curPage={'shop'} />
            <div className="shop-page padding-top padding-bottom aside-bg">
                <div className="container">
                    <div className="row justify-content-center pb-15">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showing}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`} >
                                        <a className="grid" onClick={() => setGridList(!GridList)}><i className="icofont-ghost"></i></a>
                                        <a className="list" onClick={() => setGridList(!GridList)}><i className="icofont-listine-dots"></i></a>
                                    </div>
                                </div>
                                <div className={`shop-product-wrap row justify-content-center g-4 ${GridList ? "grid" : "list"}`} >
                                    {productList.map((val, i) => (
                                        <div className="col-lg-4 col-md-6 col-12" key={i}>
                                            <div className="product-item">
                                                <div className="product-thumb">
                                                    <div className="pro-thumb">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    </div>
                                                    <div className="product-action-link">
                                                        <a href="#"><i className="icofont-eye"></i></a>
                                                        <a href="#"><i className="icofont-heart"></i></a>
                                                        <a href="#"><i className="icofont-cart-alt"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5><Link to="/shop-single">{val.title}</Link></h5>
                                                    <Rating />
                                                    <h6>{val.price}</h6>
                                                </div>
                                            </div>
                                            <div className="product-list-item">
                                                <div className="product-thumb">
                                                    <div className="pro-thumb">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    </div>
                                                    <div className="product-action-link">
                                                        <a href="#"><i className="icofont-eye"></i></a>
                                                        <a href="#"><i className="icofont-heart"></i></a>
                                                        <a href="#"><i className="icofont-cart-alt"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5><Link to="/shop-single">{val.title}</Link></h5>
                                                    <Rating />
                                                    <h6>{val.price}</h6>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>
                                <PaginationTwo />
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-7 col-12">
                            <aside className="ps-lg-4">
                                <SearchWidget />
                                <ShopcateWidget />
                                <RecentProduct />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default ShopPage