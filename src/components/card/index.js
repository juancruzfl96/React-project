import './style.css';
import { Link } from 'react-router-dom';


const Card = ({ character }) => {
	return (
		<div  className="card">
			<Link to='/character' className="linkCharacter">
				<img
					src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					className='cardImg' height='350px' width='300px'
				/>
				<p className="name">{character.name}</p>
			</Link>
		</div>
	);
};

export default Card;