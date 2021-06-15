import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/header/header'
import Loading from '../components/loading'
import ModalCards from '../components/modal';
import Card from '../components/card';
import './style.css';

function Home() {
	const [loading, setLoading] = useState(true)
	const [character, setCharacter] = useState(null)
	const [open, setOpen] = useState(false);
	const [characters, setCharacters] = useState([]);
	const [name, setName] = useState('');


	useEffect(() => {
		 axios
		 	.get( 				
		 		`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=12166a8248b0ded7a660f83210613e0f&hash=349e7675d087b2575586f503a427eabb${name?`&nameStartsWith=${name}`:''}`
		 	)
		 	.then((res) => {
		 		setCharacters(res.data.data.results);

		 	})
	 	.finally(() => setLoading(false)) 
		}, [name]);

  const handleModal = (character) => {
		setCharacter(character)
		setOpen(!open)
	}

	const onChange = (value) => {setName(value)}

	return (
		<>
		<Header onChange={onChange}/>
		<Loading loading={loading}/>
		<div className='home'>
			{open && <ModalCards open={open} onClose={handleModal} character={character}/>}
			{characters.map((character) => (
				<Card key={character.id} character={character} onClick={handleModal}/>
			))}
		</div>
		</>
	);
}

export default Home;