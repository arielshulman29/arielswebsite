import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Content from './pages/content'
import NotFound from './components/notfound'
import './App.scss';



function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Content} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
