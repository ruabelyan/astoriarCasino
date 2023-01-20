import React from 'react';
import { Link } from 'react-router-dom';
import RatingTwo from '../rating-2';

const title = "Recent Product";

const productList = [
    {
        imgUrl: 'assets/images/shop/pp/01.jpg',
        imgAlt: 'product',
        title: 'Product Title Here',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/pp/02.jpg',
        imgAlt: 'product',
        title: 'Product Title Here',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/pp/03.jpg',
        imgAlt: 'product',
        title: 'Product Title Here',
        price: '$200.00',
    },
    {
        imgUrl: 'assets/images/shop/pp/04.jpg',
        imgAlt: 'product',
        title: 'Product Title Here',
        price: '$200.00',
    },
]

const RecentProduct = () => {
    return (
        <div className="widget widget-post recent-product">
            <div className="widget-header">
                <h5>{title}</h5>
            </div>
            <ul className="lab-ul widget-wrapper">
                {productList.map((val, i) => (
                    <li className="d-flex flex-wrap justify-content-between" key={i}>
                        <div className="post-thumb">
                            <Link to="/shop-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                        </div>
                        <div className="post-content ps-4">
                            <Link to="/shop-single">
                                <h6>{val.title}</h6>
                            </Link>
                            <RatingTwo />
                            <p className="price">{val.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecentProduct