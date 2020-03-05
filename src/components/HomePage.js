import React from 'react';

// import HeadContent from './HeadContent/HeadContent';
import QuestionHeader from './Asked Questions/QuestionsHeader'
import QuickLinks from './QuickLinksSlider/QuickLinks'
import Newsletter from './Newsletter/Newsletter'
import MainContent from './MainContent/MainContent'


function HomePage() {
    return (
        <div className="main-page">
            <QuickLinks />
            {/* <HeadContent /> */}
            <MainContent />
            <Newsletter />
            <QuestionHeader />
        </div>
    )
}

export default HomePage;