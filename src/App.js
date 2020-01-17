import React, { Component } from 'react';
import Infobar from './components/Infobar/Infobar';
import HeadContent from './components/HeadContent/HeadContent';
import MainContent from './components/MainContent/MainContent';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Infobar />
        <HeadContent />
        <MainContent />
      </div>
    );
  }
}

export default App;
