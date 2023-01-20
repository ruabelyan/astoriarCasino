import React from 'react';


const title = "02 Comment";

const commentList = [
    {
        imgUrl: 'assets/images/blog/author/02.jpg',
        imgAlt: 'comment thumb',
        name: 'Linsa Faith',
        date: 'January 5, 2022 at 12:41 pm',
        desc: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
    },
    {
        imgUrl: 'assets/images/blog/author/03.jpg',
        imgAlt: 'comment thumb',
        name: 'James Jusse',
        date: 'January 5, 2022 at 12:41 pm',
        desc: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
    },
]


const CommentWidget = () => {
    return (
        <div id="comments" className="comments">
            <h6 className="comment-title">{title}</h6>
            <ul className="lab-ul comment-list">
                {commentList.map((val, i) => (
                    <li className="comment" key={i}>
                        <div className="com-item">
                            <div className="com-thumb">
                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                            </div>
                            <div className="com-content">
                                <div className="com-title">
                                    <div className="com-title-meta">
                                        <a href="#">{val.name}</a>
                                        <span> {val.date} </span>
                                    </div>
                                    <span className="reply">
                                        <a className="comment-reply-link" href="#"><i className="icofont-reply-all"></i>Reply</a>
                                    </span>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CommentWidget