import { Route, Switch, BrowserRouter } from 'react-router-dom';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={() => <h1>Login</h1>} />
      </Switch>
    </BrowserRouter>
  );
};
