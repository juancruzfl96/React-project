import React from 'react';

import Header from '../../components/header/header';
import Body from '../../components/body/body';

const Home = () => (
	<div className='homeContainer'>
		<Header />
		<div className='main'>
			<Body />
		</div>
	</div>
);

export default Home;
