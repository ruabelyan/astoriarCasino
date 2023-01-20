import React from 'react';

const name = "Rajib Ahmed";
const desc = "Competently conceptualize alternative synergy and technically and niche markets. Efficiently impact technically sound outsourcing rath tnclicks-and-mortar best practices.";

const socialList = [
    {
        link: '#',
        iconName: 'icofont-twitter',
    },
    {
        link: '#',
        iconName: 'icofont-behance',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
    },
    {
        link: '#',
        iconName: 'icofont-vimeo',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
    },
]

const AuthorWidget = () => {
    return (
        <div className="authors">
            <div className="author-thumb">
                <img src="assets/images/blog/author/01.jpg" alt="author" />
            </div>
            <div className="author-content">
                <h6>{name}</h6>
                <p>{desc}</p>
                <div className="social-media">
                    {socialList.map((val, i) => (
                        <a href={val.link} key={i}><i className={val.iconName}></i></a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AuthorWidget