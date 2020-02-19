import React from 'react';

import MainContent from './MainContent/MainContent';
import HeadContent from './HeadContent/HeadContent';
import QuestionHeader from './Asked Questions/QuestionsHeader'


function HomePage() {
    return (
        <div className="main-page">
            <HeadContent />
            <MainContent />
            <QuestionHeader />
        </div>
    )
}

export default HomePage;