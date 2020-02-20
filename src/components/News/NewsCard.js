import React from 'react';

function NewsCard(props) {
    return (
        <section className="news-card-section">
            <h3>{props.item.title}</h3>

            <div className="entry-meta">
                <span className="views">
                    <i className="fa fa-heart-o">{props.item.views}</i>
                </span>
                <span className="date">
                    <i className="fa fa-clock-o">{props.item.date}</i>
                </span>
            </div>

            <div className="entry-content">
                <p>{props.item.content}</p>
            </div>
        </section>
    )
}

export default NewsCard;