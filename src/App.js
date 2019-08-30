import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { withTranslation, Trans } from 'react-i18next';
import HeaderMenu from './components/HeaderMenu';
import './App.scss';

import { defaultAction } from './redux/default_reducer';

const Home = () => {
  return (
    <div>
      <Link to="/account">to Account</Link>
    </div>
  );
};

const Account = () => {
  return (
    <div>
      <Link to="/">to Home</Link>
    </div>
  );
};
class App extends Component {
  state = {
    lang: 'en'
  };

  onHandleChangeLang = event => {
    const newlang = this.state.lang === 'en' ? 'il' : 'en';
    this.setState({
      lang: newlang
    });
    this.props.i18n.changeLanguage(newlang);
  };

  onHandleClick = event => {
    this.props.defaultAction(Math.random());
  };

  render() {
    const { t } = this.props;
    const data = t('header', { returnObjects: true }).menu;

    console.log(data);

    return (
      <div>
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/" component={Home} />
        </Switch>
        <h1>App #{this.props.count}</h1>
        <p>Some text</p>
        <p>
          <HeaderMenu />
        </p>
        <p>
          <button onClick={this.onHandleClick}>Push Account to router</button>
          <button onClick={this.onHandleChangeLang}>Change Language</button>
        </p>
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
)(withTranslation()(App));
