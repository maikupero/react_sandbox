import React, { useContext, useCallback, useEffect } from 'react';
import { AppContext } from '../Wordle';
import Key from './Key';

function Keyboard() {
	const { onEnter, onDelete, onSelectLetter, disabledLetters } = useContext(AppContext)
	
	const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
	const keys2 = ["A","S","D","F","G","H","J","K","L"];
	const keys3 = ["Z","X","C","V","B","N","M",];

	// Prevents reupdating everything unnecessarily.
	const handleKeyboard = useCallback((event) => {
		if (event.key === 'Enter') {
			onEnter();
		} else if (event.key === 'Backspace') {
			onDelete();
		} else {
			for (let letter of letters) {
				if (event.key === letter) {
					onSelectLetter(letter.toUpperCase())
				}
			}
		}
	});

	useEffect(() => {
		document.addEventListener("keydown", handleKeyboard);

		return () => {
			document.removeEventListener("keydown", handleKeyboard);
		}
	}, [handleKeyboard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
			<div className="line1">
				{keys1.map((key) => {
					return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>;
				})}
			</div>
			<div className="line2">
				{keys2.map((key) => {
					return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>;
				})}
			</div>
			<div className="line3">
				<Key keyVal={"ENTER"} bigKey />
				{keys3.map((key) => {
					return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>;
				})}
				<Key keyVal={"DELETE"} bigKey />
			</div>
    </div>
  )
}

export default Keyboard