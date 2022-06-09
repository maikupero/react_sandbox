import './wordle.css';
import { createContext, useEffect, useState } from 'react';

import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { boardDefault, generateWordSet } from './boardhelper';

export const AppContext = createContext();

export default function Wordle() { 
	const [board, setBoard] = useState(boardDefault);
	const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
	const [wordSet, setWordSet] = useState(new Set());
	const [disabledLetters, setDisabledLetters] = useState([]);

	const correctWord = "RIGHT";

	useEffect(() => {
		generateWordSet().then((words) => {
			setWordSet(words.wordSet);
		})
	})
	
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
		
		let currWord = "";
		for (let l of board[currAttempt.attempt]) {
			currWord += l;
		}
		if (wordSet.has(currWord.toLowerCase())) {
			setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
		} else {
			alert("Word not found.");
		}

		if (currWord === correctWord) {
			alert("You got it!");
		}
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
					correctWord,
					disabledLetters,
					setDisabledLetters
				}}>
				<Board />
				<Keyboard />
			</AppContext.Provider>
		</div>
	);
};