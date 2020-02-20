import React, { Component } from 'react';

import TrainingType from '../TrainingTypes/TrainingType'
import types from '../TrainingTypes/types'

import TrainingHeader from '../TrainingsPage/TrainingHeader';


class TrainingsPage extends Component {
    constructor() {
        super();
        this.state = {
            trainingTypes: types
        }
    }
    render() {
        const typeItems = this.state.trainingTypes.map(item => <TrainingType key={item.id} item={item} />)
        return (
            <div className="trainings-page">
                <TrainingHeader />
                
                <div className="training-page-wrap">
                    <div className="training-page-cards">
                        {typeItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainingsPage;