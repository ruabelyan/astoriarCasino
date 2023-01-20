import React from 'react'

const title = "Our Popular tags";

const tagList = [
    {
        link: '#',
        text: 'template',
    },
    {
        link: '#',
        text: 'design',
    },
    {
        link: '#',
        text: 'codecanyon',
    },
    {
        link: '#',
        text: 'videohive',
    },
    {
        link: '#',
        text: 'audiojungle',
    },
    {
        link: '#',
        text: '3docean',
    },
    {
        link: '#',
        text: 'template',
    },
    {
        link: '#',
        text: 'design',
    },
    {
        link: '#',
        text: 'codecanyon',
    },
]

const TagWidget = () => {
    return (
        <div className="widget widget-tags">
            <div className="widget-header">
                <h5>{title}</h5>
            </div>
            <ul className="lab-ul widget-wrapper">
                {tagList.map((val, i) => (
                    <li key={i}>
                        <a href={val.link}>{val.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TagWidget