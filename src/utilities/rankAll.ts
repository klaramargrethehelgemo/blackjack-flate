import { rankHand } from "./checkSum";
import { Player, Stages } from "../data/datatypes";

const decideWinner = (players: Player[]) => {
  let winner = null;
  if (
    players[0].progress === Stages.winner &&
    players[1].progress === Stages.winner
  ) {
    winner = "To vinnere";
  } else {
    if (players[0].progress === Stages.winner) {
      winner = players[0].name;
    } else {
      if (players[1].progress === Stages.winner) {
        winner = players[1].name;
      } else {
        if (
          players[0].progress !== Stages.notFinished &&
          players[1].progress === Stages.notFinished
        ) {
          winner = "Ingen vinner";
        }
      }
    }
    return winner;
  }
};
function rankAll(players: Player[]) {
  players.map((aPlayer) => rankHand(aPlayer));
  const winner = decideWinner(players);
  return { players, winner };
}

export default rankAll;
