import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/login' component={Login} />
				<Route path='/' component={Home} />
				<Redirect path='*' to='/' />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
