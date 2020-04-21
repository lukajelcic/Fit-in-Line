import React from 'react';
import Media from './Media'

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
                
                <div className="coach-content">
                    <div className="coach">
                        <Media
                            img="https://nsc.ie/wp-content/uploads/2015/08/PT-10-300x189.jpg"
                            role="Trener"
                            name="Tanja Nikolic"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;