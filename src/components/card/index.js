import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './style.css';



const Card = ({ character, onClick }) => {
	const [favorite, setFavorite] = useState(false);
	
	const handleClick = () => {
		setFavorite(!favorite);
		console.log("cambia el estado");
	};
	return (
		<div  onClick={() => onClick(character)} className="card">
			<div className="imgICon">		
				<img
					src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					className='cardImg' height='100%' width='100%'
				/>
				<button onClick={() => handleClick()}>
				<FontAwesomeIcon icon={faStar} className='iconStar' />
				</button>

			</div>	
				<span className="name">{character.name}</span>
		</div>
	);
};

export default Card;