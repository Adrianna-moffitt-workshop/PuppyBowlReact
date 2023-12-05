import "../App.css";
import PlayerCard from "./PlayerCard";
import { fetchPlayers } from "../Api/Index";
import { useEffect, useState } from "react";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function declareNewPlayers() {
      try {
        const newPlayers = await fetchPlayers();
        setPlayers(newPlayers.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    declareNewPlayers();
  }, []);

  return (
    <>
      <div id="all-players-containers">
        {players.map((player, index) => {
          console.log(player);
          return <PlayerCard key={index} player={player} />;
        })}
      </div>
    </>
  );
}