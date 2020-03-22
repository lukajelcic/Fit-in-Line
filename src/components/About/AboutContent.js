import React from 'react';

function AboutContent(props) {
    return (
        <div className="page-content">
            <div className="about-text">
                <h1 className="about-title">{props.h1}</h1>
                <h2>{props.h2} </h2>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
            </div>
        </div>
    )
}

export default AboutContent;