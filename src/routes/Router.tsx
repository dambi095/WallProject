import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Login, Home, Write} from '../pages/index';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<MainHeader />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/write' component={Write} />
				<Route path='/login' component={Login} />
				<Redirect path='*' to='/' />
			</Switch>
			<MainFooter />
		</BrowserRouter>
	);
};

export default Router;
