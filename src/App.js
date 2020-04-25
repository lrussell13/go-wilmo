import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
//import PrivateRoute from './Utils/PrivateRoute';
import Home from './Components/Home/Home';
import AddEvent from './Components/AddEvent/AddEvent';

function App() {
  return (
  <Switch >
    <Route path="/" exact render={() => <Home />}/>
    <Route path="/AddEvent" render={() => <AddEvent />}/>
  </Switch>
  );
}

export default withRouter(App);
