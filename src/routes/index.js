import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Favorite from '../views/favorite';
import Home from '../views/home';
import Layout from '../components/layout';
import Character from '../views/character';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/home' component={Home} />
					<Route exact path='/favorite' component={Favorite} />
					<Route exact path='/character' component={Character} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
