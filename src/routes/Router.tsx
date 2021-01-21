import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { RootState } from '../store/reducers';


const Router: React.FC = () => {
    const { isLoggedin } = useSelector((state: RootState) => state.user);

    return (
      <BrowserRouter>
        <Switch>
          {!isLoggedin 
                ? <Route path='/login' component={Login} />
                    : <Route exact path='/' component={Home} />}
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
};

export default Router;