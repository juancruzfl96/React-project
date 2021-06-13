import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ModalCards from '../components/modal';
import Card from '../components/card';
import './style.css';

function Home() {
	const [character, setCharacter] = useState(null)
	const [open, setOpen] = useState(false);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get( 				
				'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=12166a8248b0ded7a660f83210613e0f&hash=349e7675d087b2575586f503a427eabb'
			)
			.then((res) => {
				setCharacters(res.data.data.results);
			})
			.catch((error) => console.log(error));
	}, []);

  const handleModal = (character) => {
		setCharacter(character)
		setOpen(!open)
	}

	return (
		<div className='home'>
			{open && <ModalCards open={open} onClose={handleModal} character={character}/>}
			{characters.map((character) => (
				<Card key={character.id} character={character} onClick={handleModal}/>
			))}
		</div>
	);
}

export default Home;