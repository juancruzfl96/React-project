import React from 'react';

class Body extends React.Component {
	render() {
		return (
			<ul>
				{this.props.cards.map((card) => {
					return (
						<li key={card.id}>
							<p>
								{card.nombre} {card.apellido}
							</p>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Body;

//https://gateway.marvel.com:443/v1/public/characters?apikey=12166a8248b0ded7a660f83210613e0f

//public key: 12166a8248b0ded7a660f83210613e0f

//private key:  4233eccf9211242026476954b3dd5b90fb521a63

//ts: 1

// 14233eccf9211242026476954b3dd5b90fb521a6312166a8248b0ded7a660f83210613e0f

//hash: 7610a65dbedc3523220fc1f444e78478

//url: https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=12166a8248b0ded7a660f83210613e0f&hash=7610a65dbedc3523220fc1f444e78478
