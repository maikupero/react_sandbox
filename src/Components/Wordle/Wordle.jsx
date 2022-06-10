import './wordle.css';
import { createContext, useEffect, useState } from 'react';

import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import GameOver from './Components/GameOver';
import Stats from './Components/Stats';
import Buttons from './Components/Buttons';
import { boardDefault, generateWordSet, getStats } from './boardhelper';

export const AppContext = createContext();

export default function Wordle() { 
	const [board, setBoard] = useState(boardDefault);
	const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
	const [wordSet, setWordSet] = useState(new Set());
	const [disabledLetters, setDisabledLetters] = useState([]);
	const [correctWord, setCorrectWord] = useState("");
	const [stats, setStats] = useState({});
	const [gameOver, setGameOver] = useState({
		gameOver: false, 
		guessedWord: false
	});

	useEffect(() => {
		const savedStats = localStorage.getItem('stats');
		console.log(savedStats);
		if (savedStats) setStats(savedStats);

		generateWordSet().then((words) => {
			setWordSet(words.wordSet);
			setCorrectWord(words.todaysWord);
			console.log(words.todaysWord);
		})
	}, []);
	
	const resetBoard = () => {
		setStats({...stats, losses: stats.losses + 1});
		setBoard(boardDefault);
	}
	const resetStats = () => {
		setStats({
			rounds: 0,
			guesses: 0,
			wins: 0,
			losses: 0
		})
	}

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
			setStats({...stats, guesses: stats.guesses + 1});
		} else {
			alert("Word not found.");
		}

		if (currWord === correctWord) {
			setStats({...stats, rounds: stats.rounds + 1, wins: stats.wins + 1});
			localStorage.setItem('stats', JSON.stringify(stats));
			setGameOver({gameOver: true, guessedWord: true});
			return;
		}
		if (currAttempt.attempt === 5) {
			setStats({...stats, rounds: stats.rounds + 1, losses: stats.losses + 1});
			localStorage.setItem('stats', JSON.stringify(stats));
			setGameOver({gameOver: true, guessedWord: false});
			return;
		}
	}

	return (
		<div className='main game'>
			<nav>
				<h1>Wordle</h1>
			</nav>
			<AppContext.Provider 
				value={{ 
					board, setBoard, 
					correctWord,
					currAttempt, setCurrAttempt, 
					onDelete, onEnter, onSelectLetter,
					resetBoard, resetStats,
					disabledLetters, setDisabledLetters,
					stats, setStats,
					gameOver, setGameOver
				}}>
				<Buttons />
				<Stats />
				<Board />
				{gameOver.gameOver ? <GameOver /> : <Keyboard />}
			</AppContext.Provider>
		</div>
	);
};