import { useContext } from 'react';
import { AppContext } from '../Wordle';

function GameOver() {
  const {gameOver, currAttempt, correctWord} = useContext(AppContext)
  return (
    <div className='gameover'>
      <h3>{gameOver.guessedWord ? "You got it!" : "You're out of guesses :("}</h3>
      <h1>The word was: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>Number of guesses required: {currAttempt.attempt}</h3>
      )}
    </div>
  )
}

export default GameOver