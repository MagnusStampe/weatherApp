import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// Component
import Header from './components/header/Header'

// Pages
import Home from './pages/home/Home';
import SearchPage from './pages/searchPage/SearchPage';
import OverviewPage from './pages/overviewPage/OverviewPage';

// Styles
import './App.css';

class App extends Component {
  state = {
    city: {
      name: 'Copenhagen'
    }
  }

  render() {
    const {
      state: {
        city
      }
    } = this;
    return (
      <div className="App" >

        <main className="content">
          <Router>
            <Header />

            <Switch>
              <Route exact path="/"
                component={props => <Home {...props} city={city} />} />
              <Route path="/search"
                component={props => <SearchPage {...props} onCitySubmit={city => this.setState({ city })} />} />
              <Route path="/overview"
                component={props => <OverviewPage {...props} city={city} />} />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
