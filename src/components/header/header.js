import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import headerMarvel from '../img/headerMarvel.png';
import './header.css';


function Header ({onChange}){
	
const [name, setName] = useState('');

const handleInputChange = (event) => {
	
	setName(event.target.value)
	onChange(name)
}

		return (
			<div className='main'>
				<div className='leftSection'>
					<Link to='/'>
						<img src={headerMarvel} alt='Logo Marvel' />
					</Link>
					<div className='search'>
						<FontAwesomeIcon icon={faSearch} className='iconSearch' />
						<input placeholder='Buscar' value={name} onChange={handleInputChange}/>
					</div>
				</div>
				<Link to='/favorite' className='favorite'>
					<FontAwesomeIcon icon={faStar} className='iconStar' />
				</Link>
			</div>
		);
}

export default Header;
