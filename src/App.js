import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Header from './containers/Header';
import HomePage from './containers/HomePage';
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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.default_reducer.count
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
