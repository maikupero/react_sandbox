import { useState, React } from 'react';
import { boardDefault } from '../boardhelper';

function Board() {
	const [board, setBoard] = useState(boardDefault);
  return (
    <div className='board'>
			<div className="row">a </div>
			<div className="row"> </div>
			<div className="row"> </div>
			<div className="row"> </div>
			<div className="row"> </div>
			<div className="row"> </div>
		</div>
  );
}

export default Board