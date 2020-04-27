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
import ScrollButton from './components/Buttons/ScrollButton';
import GalleryPage from './components/Gallery/GalleryPage';
import Navbar from './components/Infobar/Navbar';
import NutritionPage from './components/Nutrition/NutritionPage';
import login from './pages/login';
import PostBlog from './components/News/PostBlog';
import AuthRoute from './util/AuthRoute';

import { Provider } from 'react-redux';
import store from './redux/store';



class App extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Navbar navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar} />
          <div className="App">
            <ScrollButton />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <AuthRoute exact path='/login' component={login} />
              <AuthRoute exact path='/fit-blog' component={PostBlog} />
              <Route exact path='/nutrition' component={NutritionPage} />
              <Route exact path='/news' component={News} />
              <Route exact path='/training' component={Training} />
              <Route exact path='/about' component={About} />
              <Route exact path='/gallery' component={GalleryPage} />
            </Switch>
            <Reserve />

            <div className="footer">
              <Footer />
            </div>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
