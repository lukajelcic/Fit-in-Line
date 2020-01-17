import React, { Component } from 'react';

import './MainContent.css'

class MainContent extends Component{
    render(){
        return(
            <div className="main-content">
                <div className="text">
                    <h2>What is Fitness and Nutrition Coaching? Is it Right for Me?</h2>
                    <p>We want to take out all the misconception surrounding fitness and nutrition and to provide a sustainable and practical approach to your goals.</p>
                    <p>We will provide you with the tools and education to empower yourself to reach and maintain these goals long term.</p>
                    <p>We assist male and females either new to training or leading stressful and hectic lifestyles, lose fat and tone their bodies while improving the overall health and fitness and increasing their energy levels.</p>
                </div>
                <div className="image">
                    <img src="https://www.pngitem.com/pimgs/m/38-386775_healthy-food-png-illustration-transparent-png.png" alt="img"></img>
                </div>
            </div>
        );
    }
}

export default MainContent;