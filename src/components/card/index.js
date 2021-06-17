import './style.css';

const Card = ({ character, onClick }) => {

	return (
		<div  onClick={() => onClick(character)} className="card">		
				<img
					src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					className='cardImg' height='100%' width='100%'
				/>
				<span className="name">{character.name}</span>
		</div>
	);
};

export default Card;