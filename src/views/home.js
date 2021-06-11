import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/card';
import './style.css';

function Home() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=12166a8248b0ded7a660f83210613e0f&hash=349e7675d087b2575586f503a427eabb'
			)
			.then((res) => {
				setCharacters(res.data.data.results);
				console.log(res.data.data.results);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='home'>
			{characters.map((character) => (
				<Card key={character.id} character={character} />
			))}
		</div>
	);
}

export default Home;