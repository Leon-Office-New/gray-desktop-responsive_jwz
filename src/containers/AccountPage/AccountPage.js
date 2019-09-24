import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountStatusBar from '../../components/AccountStatusBar';
import AccountHistory from './AccountHistory';
import './AccountPage.scss';

const AccountPage = () => {
  return (
    <main className="account-page">
      <div className="container">
        <AccountStatusBar />

        <Switch>
          <Route
            exact
            path="/account"
            component={() => <div>AccountPage</div>}
          />
          <Route exact path="/account/history" component={AccountHistory} />
        </Switch>
      </div>
    </main>
  );
};

export default AccountPage;
