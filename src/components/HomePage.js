import React from 'react';

import HeadContent from './HeadContent/HeadContent';
import QuestionHeader from './Asked Questions/QuestionsHeader'
import QuickLinks from './QuickLinksSlider/QuickLinks'
import Newsletter from './Newsletter/Newsletter'


function HomePage() {
    return (
        <div className="main-page">
            <QuickLinks />
            <HeadContent />
            <Newsletter />
            <hr></hr>
            <QuestionHeader />
        </div>
    )
}

export default HomePage;