import React from "react";
//import { hands } from "../data/StaticData";
import { EMDASH, Card, Deck } from "../data/datatypes";

function ShowCard(props: { card: Card }) {
  let classname = "card-color-black";
  switch (props.card.suit) {
    case "d":
      classname = "card-color-red";
      break;
    case "h":
      classname = "card-color-red";
      break;
    case "c":
      classname = "card-color-black";
      break;
    case "s":
      classname = "card-color-black";
      break;
  }

  return <div className={classname}>{props.card.symbol} </div>;
}

function AllCards(props: { cards: Deck }) {
  let classname = "cards";
  const cardList =
    props.cards.length > 0
      ? props.cards.map((aCard) => <ShowCard key={aCard.symbol} card={aCard} />)
      : EMDASH;

  return (
    <div className="cards">
      <div className="texts">Kortstokken</div>
      {cardList}
    </div>
  );
}

function ShuffledDeck(props: { shuffledDeck: Deck }) {
  return <AllCards cards={props.shuffledDeck} />;
}
export default ShuffledDeck;
