import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import headerMarvel from '../img/headerMarvel.png';
import './header.css';

class Header extends React.Component {
	render() {
		return (
			<div className='main'>
				<div className='leftSection'>
					<a href='#'>
						<img src={headerMarvel} alt='marvel' />
					</a>
					<div className='search'>
						<FontAwesomeIcon icon={faSearch} className='iconSearch' />
						<input placeholder='Buscar'></input>
					</div>
				</div>
				<a href='#' className='favorite'>
					<FontAwesomeIcon icon={faStar} className='iconStar' />
				</a>
			</div>
		);
	}
}

export default Header;
