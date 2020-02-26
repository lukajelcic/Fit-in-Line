import React from 'react';

function TrainingType(props) {
    return (
        <section className="training-card-section">
            <article className="card">

                <div className="training-img">
                    <a href="/">
                        <img style={{ width: 300, height: 200 }} src={props.item.url} alt="/"></img>
                    </a>
                </div>

                <h3 className="entry-title"><a href="/">{props.item.title}</a></h3>

                <div className="entry-content">
                    <p>{props.item.text}</p>
                </div>
            </article>
        </section>
    )
}

export default TrainingType;