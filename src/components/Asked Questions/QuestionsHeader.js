import React from 'react';
import questionsL from './questionsL';
import questionsR from './questionsR';
import QuestionsLeft from './QuestionsLeft';
import QuestionsRight from './QuestionsRight';


import './Question.css';


class QuestionsHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            questionsForLeftSide: questionsL,
            questionsForRightSide:questionsR
        }
    }
    render() {
        const questionsLeft = this.state.questionsForLeftSide.map(item => <QuestionsLeft key={item.id} item={item} />)
        const questionsRight = this.state.questionsForRightSide.map(item => <QuestionsRight key={item.id} item={item} />)
        return (
            <div className="questions-main">
                <div className="questions-heading-text">
                    <div className="inner-text">
                        <h2>Najcesce postavljana pitanja</h2>
                        <h3>pogledajte odgovore !</h3>
                    </div>
                </div>

                <div className="questions">
                    <div className="questions-left">
                        {questionsLeft}
                    </div>

                    <div className="questions-right">
                        {questionsRight}
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsHeader;