import React, { Component } from 'react';
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './components/history';
import Training from './components/TrainingsPage/Training';
import './components/TrainingTypes/TrainingType.css';
import About from './components/About/About';
import Reserve from './components/Reserve/Reserve';
import News from './components/News/News';
import GalleryPage from './components/Gallery/GalleryPage';
import Navbar from './components/Infobar/Navbar';
import NutritionPage from './components/Nutrition/NutritionPage';
import login from './pages/login';
import AuthRoute from './util/AuthRoute';
import OneNews from './components/News/OneNews'

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/store';
import dashboard from './pages/dashboard';
import TrainingDetails from './components/TrainingsPage/TrainingDetails';



class App extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  render() {
    const { user: { authenticated } } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          <Navbar navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar} />
          <div className="App">
            {/* <ScrollButton /> */}
            <Switch>
              <AuthRoute exact path='/login' component={login} authenticated={authenticated} />
              <Route exact path='/nutrition' component={NutritionPage} />
              <Route exact path='/news' component={News} />
              <Route exact path='/news/:newsId' component={OneNews} />
              <Route exact path='/programs' component={Training} />
              <Route exact path='/programs/:id/:title' component={TrainingDetails} />
              <Route exact path='/about' component={About} />
              <Route exact path='/gallery' component={GalleryPage} />
              <Route exact path='/dashboard' component={dashboard} />
              <Route exact path='/' component={HomePage} />
              <Route exact path='*' component={HomePage} />
            </Switch>
{/* 
            {!authenticated ?
              <Reserve /> : null} */}


            <div className="footer">
              <Footer />
            </div>

          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(App);
