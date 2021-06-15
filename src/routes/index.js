import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Favorite from '../views/favorite';
import Home from '../views/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/favorite' component={Favorite} />
				</Switch>
		</BrowserRouter>
	);
}

export default App;
