import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Favorite from '../views/favorite';
import Home from '../views/home';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/favorite' component={Favorite} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
