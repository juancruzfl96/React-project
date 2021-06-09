import React from 'react';

import Header from '../components/header/header';
import './style.css';

class Favorite extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className='body'>FAVORITE CHARACTERS</div>
			</div>
		);
	}
}

export default Favorite;
