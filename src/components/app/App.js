import React from 'react';
import { Route, Switch } from "wouter";
import Home from "../../pages/home/Home"


const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
