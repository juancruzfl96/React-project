import React from 'react';

import './style.css';
import Header from '../components/header/header';
import Body from '../components/body/body';

class Home extends React.Component {
	state = {
		data: [
			{
				nombre: 'juan cruz',
				apellido: 'fernandez',
				edad: 25,
				id: 6,
			},
			{
				nombre: 'jorge',
				apellido: 'fernandez',
				edad: 27,
				id: 5,
			},
			{
				nombre: 'benjamin',
				apellido: 'kugler',
				edad: 25,
				id: 4,
			},
			{
				nombre: 'martin',
				apellido: 'mendez',
				edad: 24,
				id: 3,
			},
			{
				nombre: 'agustin',
				apellido: 'gomez',
				edad: 26,
				id: 2,
			},
			{
				nombre: 'tito',
				apellido: 'iglesia',
				edad: 23,
				id: 1,
			},
		],
	};

	render() {
		return (
			<div>
				<Header />
				<div className='body'>
					<Body cards={this.state.data} />
				</div>
			</div>
		);
	}
}

export default Home;
