import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import headerMarvel from '../img/headerMarvel.png';
import './header.css';


const Header = () => {
	
const	handleChange = (e) => {
		console.log({ value: e.target.value });
	};

		return (
			<div className='main'>
				<div className='leftSection'>
					<Link to='/'>
						<img src={headerMarvel} alt='Logo Marvel' />
					</Link>
					<div className='search'>
						<FontAwesomeIcon icon={faSearch} className='iconSearch' />
						<input placeholder='Buscar' onChange={handleChange}></input>
					</div>
				</div>
				<Link to='/favorite' className='favorite'>
					<FontAwesomeIcon icon={faStar} className='iconStar' />
				</Link>
			</div>
		);

}

export default Header;
