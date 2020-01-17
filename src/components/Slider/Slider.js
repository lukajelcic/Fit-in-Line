import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import './Slider.css'

class Slider extends Component {
    render(){
        const images = [
            {url:"https://images.unsplash.com/photo-1542766788-a2f588f447ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"},
            {url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
            {url:"https://images.unsplash.com/photo-1527933053326-89d1746b76b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
            {url:"https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        ];

        return(
            <div className="slider">
                <SimpleImageSlider
                width={window.innerWidth}
                height={600}
                showBullets ={false}
                images={images}
                slideDuration ={1}
                />
            </div>
        );
    }
}

export default Slider;