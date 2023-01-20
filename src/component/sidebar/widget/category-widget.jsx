import React from 'react';

const title = "Post Categories";

const categoryList = [
    {
        name: 'Show all',
        count: '18',
        link: '#',
    },
    {
        name: 'Business',
        count: '20',
        link: '#',
    },
    {
        name: 'Creative',
        count: '25',
        link: '#',
    },
    {
        name: 'Inspiation',
        count: '30',
        link: '#',
    },
    {
        name: 'News',
        count: '28',
        link: '#',
    },
    {
        name: 'Photography',
        count: '25',
        link: '#',
    },
    {
        name: 'Smart',
        count: '20',
        link: '#',
    },
]

const CategoryWidget = () => {
    return (
        <div className="widget widget-category">
            <div className="widget-header">
                <h5>{title}</h5>
            </div>
            <ul className="lab-ul widget-wrapper list-bg-none">
                {categoryList.map((val, i) => (
                    <li key={i}>
                        <a href={val.link} className="d-flex flex-wrap justify-content-between"><span><i className="icofont-rounded-double-right"></i>{val.name}</span><span>{val.count}</span></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryWidget