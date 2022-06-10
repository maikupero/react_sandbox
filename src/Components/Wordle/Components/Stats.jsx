import { useContext } from "react";
import { AppContext } from "../Wordle";

function Stats() {
	const { stats } = useContext(AppContext);

  return (
    <div className="stats">
      <h4>Rounds: {stats.rounds}</h4>
      <h4>Guesses: {stats.guesses}</h4>
      <h4>Wins: {stats.wins}</h4>
      <h4>Losses: {stats.losses}</h4>
    </div>
  )
}

export default Stats;