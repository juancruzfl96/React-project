import React, { useState, useEffect } from 'react';

import api from '../api';
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
		api(name).then(res =>setCharacters(res)).finally(() => setLoading(false)) 
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