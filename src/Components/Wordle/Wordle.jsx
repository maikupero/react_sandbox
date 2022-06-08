import './wordle.css';
import { createContext, useState } from 'react';

import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { boardDefault } from './boardhelper';

export const AppContext = createContext();

export default function Wordle() { 
	const [board, setBoard] = useState(boardDefault);
	const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});

	const correctWord = "RIGHT";

	const onSelectLetter = (keyVal) => {
		if (currAttempt.letterPos > 4) return;
		const newBoard = [...board];
		newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
		setBoard(newBoard);
		setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1})
	}
	const onDelete = () => {
		if (currAttempt.letterPos === 0) return;
		const newBoard = [...board];
		newBoard[currAttempt.attempt][currAttempt.letterPos-1] = "";
		setBoard(newBoard);
		setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
	}
	const onEnter = () => {
		if (currAttempt.letterPos !== 5) return;
		setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
	}

	return (
		<div className='main game'>
			<nav>
				<h1>Wordle</h1>
			</nav>
			<AppContext.Provider 
				value={{ 
					board, 
					setBoard, 
					currAttempt, 
					setCurrAttempt, 
					onDelete, 
					onEnter, 
					onSelectLetter,
					correctWord
				}}>
				<Board />
				<Keyboard />
			</AppContext.Provider>
		</div>
	);
};