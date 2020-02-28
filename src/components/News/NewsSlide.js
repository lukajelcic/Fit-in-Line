import React from 'react';
import { Slide } from '.react-slideshow-image';

import img1 from '../../images/news1.jpg';
import img2 from '../../images/news2.jpg';

import './Slide.css'

const properties = {
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:true,
    arrows:true

}

function NewsSlide (){
    return(
        <div className="containerSlide">
            <Slide {...properties}>
                <div className= "each-slide">
                    <div>
                        <img src={img1} alt="img1"></img>
                    </div>
                </div>
                <div className= "each-slide">
                    <div>
                        <img src={img2} alt="img2"></img>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default NewsSlide;