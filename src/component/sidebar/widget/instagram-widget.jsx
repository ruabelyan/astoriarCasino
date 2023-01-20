import React from 'react';

const title = "Instagram";

const instagramList = [
    {
        imgUrl: 'assets/images/instragram/01.jpg',
        imgAlt: 'instragram',
    },
    {
        imgUrl: 'assets/images/instragram/02.jpg',
        imgAlt: 'instragram',
    },
    {
        imgUrl: 'assets/images/instragram/03.jpg',
        imgAlt: 'instragram',
    },
    {
        imgUrl: 'assets/images/instragram/04.jpg',
        imgAlt: 'instragram',
    },
    {
        imgUrl: 'assets/images/instragram/05.jpg',
        imgAlt: 'instragram',
    },
    {
        imgUrl: 'assets/images/instragram/06.jpg',
        imgAlt: 'instragram',
    },
    {
        imgUrl: 'assets/images/instragram/07.jpg',
        imgAlt: 'instragram',
    },
    {
        imgUrl: 'assets/images/instragram/08.jpg',
        imgAlt: 'instragram',
    },
    {
        imgUrl: 'assets/images/instragram/09.jpg',
        imgAlt: 'instragram',
    },
]

const InstagramWidget = () => {
    return (
        <div className="widget widget-instagram">
            <div className="widget-header">
                <h5>{title}</h5>
            </div>
            <ul className="lab-ul widget-wrapper d-flex flex-wrap justify-content-center">
                {instagramList.map((val, i) => (
                    <li key={i}>
                        <a href={`${val.imgUrl}`}><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InstagramWidget