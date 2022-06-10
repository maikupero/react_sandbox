import wordBank from './wordlist.txt';

export const boardDefault = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""]
];

export const generateWordSet = async () => {
	let wordSet;
	let todaysWord;
	await fetch(wordBank)
		.then((response) => response.text())
		.then((result) => {
			const wordArr = result.split("\n");
			todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)].toUpperCase();
			wordSet = new Set(wordArr);
		});

	return { wordSet, todaysWord };
}

export const getStats = () => {
	const newStats = {
		rounds: 0, 
		guesses: 0,
		wins: 0,
		losses: 0
	};
	const savedStats = JSON.parse(localStorage.getItem('user'));
	
	return savedStats ? savedStats : newStats
}