import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import headerMarvel from '../img/headerMarvel.png';
import './header.css';

class Header extends React.Component {
	handleChange = (e) => {
		console.log({ value: e.target.value });
	};

	render() {
		return (
			<div className='main'>
				<div className='leftSection'>
					<Link to='/home'>
						<img src={headerMarvel} alt='Logo Marvel' />
					</Link>
					<div className='search'>
						<FontAwesomeIcon icon={faSearch} className='iconSearch' />
						<input placeholder='Buscar' onChange={this.handleChange}></input>
					</div>
				</div>
				<Link to='/home/favorite' className='favorite'>
					<FontAwesomeIcon icon={faStar} className='iconStar' />
				</Link>
			</div>
		);
	}
}

export default Header;
