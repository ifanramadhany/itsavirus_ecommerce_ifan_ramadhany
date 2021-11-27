import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { HomePage, DetailPage, UserBagPage } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/detail-product/:id">
          <DetailPage />
        </Route>
        <Route exact path="/user-bag">
          <UserBagPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
