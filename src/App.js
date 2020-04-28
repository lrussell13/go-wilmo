import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
//import PrivateRoute from './Utils/PrivateRoute';
import Home from './Components/Home/Home';
import AddEvent from './Components/AddEvent/AddEvent';
import Event from './Components/Event/Event';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
  <Switch >
    <Route path={"/"} exact render={() => <Home />}/>
    <Route path={"/Login"} render={() => <Login />}/>
    <Route path={"/Register"} render={() => <Register />}/>
    <Route path={"/AddEvent"} render={() => <AddEvent />}/>
    <Route path={"/event/:id"} component={(props) => <Event id={props.match.params.id}/> }/>
  </Switch>
  );
}

export default withRouter(App);
