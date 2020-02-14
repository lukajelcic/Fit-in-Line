import React, { Component } from 'react';

import './MainContent.css'

class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="text">
                    <h2>What is Fitness and Nutrition Coaching? <span>Is it Right for Me?</span></h2><br></br>
                    <p>We want to take out all the misconception surrounding fitness and nutrition and to provide a sustainable and practical approach to your goals.</p>
                    <p>We will provide you with the tools and education to empower yourself to reach and maintain these goals long term.</p>
                    <p>We assist male and females either new to training or leading stressful and hectic lifestyles, lose fat and tone their bodies while improving the overall health and fitness and increasing their energy levels.</p>
                </div>
                <div className="badges">
                    <img src="http://fmfitnessnutrition.com/wp-content/uploads/2018/12/nutrition-icon-small-7-1.png" alt=""></img>
                    <h5 >
                        NUTRITION<span> COACHING</span>
                    </h5>
                    <img src="https://fmfitnessnutrition.com/wp-content/uploads/2018/12/nutrition-icon-small-6-1.png" alt=""></img>
                    <h5>
                        PERSONAL<span> TRAINING</span>
                    </h5>
                    <img src="https://fmfitnessnutrition.com/wp-content/uploads/2018/12/nutrition-icon-small-4-1.png" alt=""></img>
                    <h5>
                        FAT<span> LOSS</span>
                    </h5>
                    <img src="https://fmfitnessnutrition.com/wp-content/uploads/2018/12/nutrition-icon-small-5-2.png" alt=""></img>
                    <h5>
                        GUARANTEED<span> RESULTS</span>
                    </h5>
                </div>
            </div>
        );
    }
}

export default MainContent;