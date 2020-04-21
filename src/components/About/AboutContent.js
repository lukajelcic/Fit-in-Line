import React from 'react';
import { Link } from 'react-router-dom';

function AboutContent(props) {
    return (
        <div className="page-content">
            <div className="about-text">
                <h1 className="about-title">{props.h1}</h1>
                <h2>{props.h2} </h2>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
                <p>{props.text6}</p>
                <p>{props.text7}</p>
                <h4>{props.text8}</h4>
                <section className="about-list">
                <div className="list">
                    <Link to="/nutrition/#nutri"><h3 className="about-nutrition">PROGRAM ISHRANE</h3></Link>
                </div>
            </section>
            </div>

        </div>
    )
}

export default AboutContent;