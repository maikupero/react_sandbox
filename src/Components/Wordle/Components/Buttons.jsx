import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../Wordle';

function Buttons() {
	const { 
		resetStats,
		resetBoard
	} = useContext(AppContext);

  return (
    <div className='wordle-buttons'>
        <button onClick={() => resetStats()}><h4>Clear Stats</h4></button>
        <button onClick={() => resetBoard()}><h4>New Word</h4></button>
    </div>
  )
}

export default Buttons;