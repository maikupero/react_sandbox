import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../Wordle';
import { boardDefault } from '../boardhelper';

function Buttons() {
	const { 
		resetStats,
		resetBoard
	} = useContext(AppContext);

  return (
    <div className='buttons'>
        <button onClick={resetStats()}>Reset Stats</button>
        <button onClick={resetBoard()}>New Word</button>
    </div>
  )
}

export default Buttons;