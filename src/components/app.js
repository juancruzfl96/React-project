import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Favorite from '../views/favorite';
import Home from '../views/home';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/home' component={Home} />
				<Route exact path='/home/favorite' component={Favorite} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
