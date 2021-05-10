import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.css';

const Module1 = React.lazy(() => import('module1/Module1'));
const Module2 = React.lazy(() => import('module2/Module2'));

const App = () => {
  return (
    <Switch>
      <Route path="/module-1" exact component={Module1} />
      <Route path="/module-2" exact component={Module2} />
    </Switch>  
  );
}

export default App;
