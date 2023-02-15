import { Player, Stages, Deck } from "../data/datatypes";
import shuffleDeck from "./shuffleDeck";

function initialize() {
  const theShuffledDeck = shuffleDeck();
  const positionInDeck = 0;
  const spillerne: Player[] = [
    {
      name: "Klara",
      playersHand: [],
      handValue: 0,
      sum: 0,
      progress: Stages.notFinished,
    },
    {
      name: "Magnus",
      playersHand: [],
      handValue: 0,
      sum: 0,
      progress: Stages.notFinished,
    },
  ];
  return { spillerne, theShuffledDeck, positionInDeck };
}

export default initialize;
