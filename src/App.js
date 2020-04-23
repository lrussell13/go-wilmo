import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
//import PrivateRoute from './Utils/PrivateRoute';
import Home from './Components/Home/Home';

function App() {
  return (
  <Switch >
    <Route path="/" exact render={() => <Home />}/>
  </Switch>
  );
}

export default withRouter(App);
