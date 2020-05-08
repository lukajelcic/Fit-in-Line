import React from 'react';
import RegButton from '../Buttons/RegButton';

function SliderBox(props) {
    return (
        <div className="slider-wrap">
            <div className="slider-box">
                <h1 className="slider-title">{props.title}</h1>
                <p className="slider-txt">{props.content}</p>
                {/* <RegButton name="Pogledaj vise" /> */}
            </div>
        </div>
    )
}

export default SliderBox;