import React, { Component } from 'react';

import TrainingType from '../TrainingTypes/TrainingType';

import types from '../TrainingTypes/types';
// import TrainingBtn from '../Buttons/TrainingBtn';

import '../TrainingTypes/TrainingType.css';

class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainingTypes: types
        }
    }
    render() {
        const typeItems = this.state.trainingTypes.map(item => <TrainingType key={item.id} item={item} />)
        return (
            <main className="training-page">
                <div className="background"></div>
                <article className="training-article">
                    <div className="page-head">
                        <header className="header-text">
                            <h1>{this.props.h1}</h1>
                            <h2>{this.props.h2}</h2>
                            <div className="training-text">
                                <p>{this.props.text1}</p>
                                <p>{this.props.text2}</p>
                            </div>
                        </header>

                        <aside className="training-image">
                            <figure>
                            </figure>
                        </aside>
                    </div>
                </article>

                <hr style={{ width: '90%' }}></hr>

                <div className="training-wrapper">
                    <div className="main-training">
                        {typeItems}
                    </div>
                </div>
            </main>
        )
    }
}

export default Training;