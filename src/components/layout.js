import React from 'react';

import Header from './header/header';

function Layout(props) {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
}

export default Layout;
