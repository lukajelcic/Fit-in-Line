import React from 'react';

// import HeadContent from './HeadContent/HeadContent';
import QuestionHeader from './Asked Questions/QuestionsHeader';
// import Newsletter from './Newsletter/Newsletter'
import MainContent from './MainContent/MainContent';
import HeroSlider from './Slider/HeroSlider';

function HomePage() {
    return (
        <div className="main-page">
            <HeroSlider />
            <MainContent />
            {/* <Newsletter /> */}
            <QuestionHeader />
        </div>
    )
}

export default HomePage;