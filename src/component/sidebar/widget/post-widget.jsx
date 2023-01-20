import React from 'react';
import { Link } from 'react-router-dom';

const title = "Recent Post";

const postList = [
    {
        imgUrl: 'assets/images/blog/p-post/01.jpg',
        imgAlt: 'product',
        title: 'Poor People’s Campaign Our Resources',
        date: '05 January 2022',
    },
    {
        imgUrl: 'assets/images/blog/p-post/02.jpg',
        imgAlt: 'product',
        title: 'Boosting Social For NGO And Charities',
        date: '05 January 2022',
    },
    {
        imgUrl: 'assets/images/blog/p-post/03.jpg',
        imgAlt: 'product',
        title: 'Poor People’s Campaign Our Resources',
        date: '05 January 2022',
    },
    {
        imgUrl: 'assets/images/blog/p-post/04.jpg',
        imgAlt: 'product',
        title: 'Boosting Social For NGO And Charities',
        date: '05 January 2022',
    },
]

const PostWidget = () => {
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <h5>{title}</h5>
            </div>
            <ul className="lab-ul widget-wrapper">
                {postList.map((val, i) => (
                    <li className="d-flex flex-wrap justify-content-between" key={i}>
                        <div className="post-thumb">
                            <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                        </div>
                        <div className="post-content ps-4">
                            <Link to="/blog-single">
                                <h6>{val.title}</h6>
                            </Link>
                            <p>{val.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostWidget