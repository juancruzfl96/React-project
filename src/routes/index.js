import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Favorite from '../views/favorite';
import Home from '../views/home';
import Layout from '../components/layout';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/home' component={Home} />
					<Route exact path='/home/favorite' component={Favorite} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
