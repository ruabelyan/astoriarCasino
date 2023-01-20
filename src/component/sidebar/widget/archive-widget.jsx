import React from 'react';

const title = "Our Archive";

const archiveList = [
    {
        link: '#',
        month: 'January',
        year: '2022',
    },
    {
        link: '#',
        month: 'February',
        year: '2022',
    },
    {
        link: '#',
        month: 'March',
        year: '2022',
    },
    {
        link: '#',
        month: 'August',
        year: '2022',
    },
    {
        link: '#',
        month: 'September',
        year: '2022',
    },
    {
        link: '#',
        month: 'October',
        year: '2022',
    },
    {
        link: '#',
        month: 'November',
        year: '2022',
    },
    {
        link: '#',
        month: 'December',
        year: '2022',
    },
]

const ArchiveWidget = () => {
    return (
        <div className="widget widget-archive">
            <div className="widget-header">
                <h5>{title}</h5>
            </div>
            <ul className="lab-ul widget-wrapper list-bg-none">
                {archiveList.map((val, i) => (
                    <li key={i}>
                        <a href={val.link} className="d-flex flex-wrap justify-content-between"><span><i className="icofont-ui-calendar"></i>{val.month}</span><span>{val.year}</span></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArchiveWidget