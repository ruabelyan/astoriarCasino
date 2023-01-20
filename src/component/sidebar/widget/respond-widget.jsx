import React from 'react';

const title = "Leave a Comment";

const RespondWidget = () => {
    return (
        <div id="respond" className="comment-respond">
            <h6>{title}</h6>
            <div className="add-comment">
                <form action="#" method="post" id="commentform" className="comment-form">
                    <input name="name" type="text" placeholder="Name*" />
                    <input name="email" type="text" placeholder="Email*" />
                    <input name="url" type="text" placeholder="Website*" className="w-100" />
                    <textarea id="comment-reply" name="comment" rows="7" placeholder="Type Here Your Comment*"></textarea>
                    <button type="submit" className="default-button"><span>Send Comment</span></button>
                </form>
            </div>
        </div>
    )
}

export default RespondWidget