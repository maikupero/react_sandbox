import React, { useContext } from 'react'
import { AppContext } from '../Wordle';

function Key({ keyVal, bigKey, disabled }) {
	const { 
		onDelete, 
		onEnter, 
		onSelectLetter 
	} = useContext(AppContext);

	const selectLetter = () => {
		if (keyVal === "ENTER") {
			onEnter();
		} else if (keyVal === "DELETE") {
			onDelete();
		}	else {
			onSelectLetter(keyVal);
		}
	};

  return (
    <div 
		className='key' 
		id={bigKey ? "big" : disabled ? "disabled" : "basic"} 
		onClick={selectLetter}>{keyVal}</div>
  );
}

export default Key