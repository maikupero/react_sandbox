import './wordle.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';

export default function Wordle() { 
	return (
		<div className='main game'>
			<nav>
				<h1>Wordle</h1>
			</nav>
			<Board />
			<Keyboard />
		</div>
	);
};