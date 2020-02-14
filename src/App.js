import React, { Component } from 'react';
import Infobar from './components/Infobar/Infobar';
import HeadContent from './components/HeadContent/HeadContent';
import MainContent from './components/MainContent/MainContent';
import TrainingType from './components/TrainingTypes/TrainingType';
import types from './components/TrainingTypes/types';
import QuestionsHeader from './components/Asked Questions/QuestionsHeader';



class App extends Component {
  constructor() {
    super()
    this.state = {
      trainingTypes: types
      // questions:questionsL
    }
  }
  render() {
    const typeItems = this.state.trainingTypes.map(item => <TrainingType key={item.id} item={item} />)

    return (
      <div className="App">
        <div>
          <Infobar />
        </div>

        <div>
          <HeadContent />
        </div>

        <div>
          <MainContent />
        </div>

        <div className="center-div">
          <div className="card-content">
            {typeItems}
          </div>
        </div>

        <div className="questions-div">
          <QuestionsHeader />
        </div>
      </div>
    );
  }
}

export default App;
