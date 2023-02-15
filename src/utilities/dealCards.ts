import { Deck, Player } from "../data/datatypes";

function dealCards(
  player: Player,
  deck: Deck,
  index: number,
  numberOfCards: number
) {
  let theIndex = index;
  let thePlayer = player;
  let theDeck = deck;

  const deal = (player: Player, numberOfCards: number) => {
    for (let i = 0; i < numberOfCards; i++) {
      player.playersHand.push(theDeck[theIndex]);
      theIndex++;
    }
    return player;
  };

  deal(thePlayer, numberOfCards);

  return { thePlayer, theIndex };
}

export default dealCards;
