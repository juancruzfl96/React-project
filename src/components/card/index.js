import './style.css';

const Card = ({ character }) => {
	return (
			<span className="card">
				<img
					src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					className='cardImg' height='350px' width='300px'
				/>
				<p className="name">{character.name}</p>
			</span>
	);
};

export default Card;

//{character.thumbnail.extension.path}
