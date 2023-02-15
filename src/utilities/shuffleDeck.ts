import { CardIndex, Deck, DeckOfCards } from "../data/datatypes";

function shuffleDeck() {
  /**
   * Shuffles array in place.
   */
  function shuffle() {
    let a = CardIndex;
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  let tempDeck = DeckOfCards;
  let indexes = shuffle();
  let shuffledDeck: Deck = [];

  for (let i = 0; i < indexes.length; i++) {
    shuffledDeck.push(tempDeck[indexes[i]]);
  }

  return shuffledDeck;
}

export default shuffleDeck;
