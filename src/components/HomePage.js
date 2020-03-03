import React from 'react';

import HeadContent from './HeadContent/HeadContent';
import QuestionHeader from './Asked Questions/QuestionsHeader'
import QuickLinks from './QuickLinksSlider/QuickLinks'


function HomePage() {
    return (
        <div className="main-page">
            <HeadContent />
            <QuickLinks />
            <QuestionHeader />
        </div>
    )
}

export default HomePage;