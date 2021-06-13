import './style.css';
import {Button} from 'reactstrap';

const Card = ({ character, onClick }) => {

	return (
		<div  className="card">
			<Button outline color="none" onClick={() => onClick(character)} className="buttonCharacter">
				<img
					src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					className='cardImg' height='350px' width='300px'
				/>
				<p className="name">{character.name}</p>
			</Button>
		</div>
	);
};

export default Card;