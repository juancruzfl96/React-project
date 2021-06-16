import React from 'react';

import './style.css';
import Header from '../components/header/header';
class Favorite extends React.Component {
	render() {
		return <div>
			<Header/>
			<div className='bodyFavorite'>
				<h1 className='center'>FAVORITE CHARACTERS:</h1>
				<h3 className='center'>Sorry!</h3>
				<h4 className='center'>Working on this page</h4>
			</div>
		</div>;
	}
}

export default Favorite;
