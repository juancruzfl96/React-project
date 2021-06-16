import './style.css';
import {Button} from 'reactstrap';

const Card = ({ character, onClick }) => {

	return (
		<div  className="card">
			<Button  color='white' onClick={() => onClick(character)} className="buttonCharacter">
				<img
					src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					className='cardImg' height='100%' width='100%'
				/>
				<h3 className="name">{character.name}</h3>
			</Button>
		</div>
	);
};

export default Card;