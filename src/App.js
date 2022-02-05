import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FilmView from './pages/FilmView';
import FilmDetails from './pages/FilmDetails';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/films" exact>
          <FilmView />
        </Route>

        <Route path="/films/:filmid">
          <FilmDetails />
        </Route>
        <Redirect from="/" to="/films" />
      </Switch>
    </>
  );
};

export default App;
