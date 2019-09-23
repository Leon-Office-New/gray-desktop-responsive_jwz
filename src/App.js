import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Header from './containers/Header';
import HomePage from './containers/HomePage';
import PrematchLeaguePage from './containers/PrematchLeaguePage';
import InPlayPage from './containers/InPlayPage';
import InPlayGamePage from './containers/InPlayGamePage';
import ChancePage from './containers/ChancePage';
import Footer from './containers/Footer';
import './App.scss';

import { defaultAction } from './redux/default_reducer';

class App extends Component {
  componentDidMount = () => {
    let root = document.documentElement;
    root.style.setProperty('--direction', 'row-reverse');
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/prematch-league" component={PrematchLeaguePage} />
          <Route exact path="/in-play" component={InPlayPage} />
          <Route exact path="/in-play-game/:id" component={InPlayGamePage} />
          <Route exact path="/chance" component={ChancePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.default_reducer.count,
  isLoading: state.default_reducer.isRequesting
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      defaultAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
