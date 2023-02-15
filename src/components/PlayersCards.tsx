import React from "react";

import { EMDASH, Card, Player } from "../data/datatypes";

import { rankHand } from "../utilities/checkSum";

function ShowCardList(props: { cards: Card[] }) {
  const showCardList =
    props.cards.length > 0
      ? props.cards.map((aCard) => <ShowCard key={aCard.symbol} card={aCard} />)
      : EMDASH;

  return <div className="players-cards">{showCardList}</div>;
}

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

  return (
    <div className="card">
      <div className={classname}>{props.card.symbol} </div>
    </div>
  );
}

function OnePlayersCards(props: { player: Player }) {
  props.player.handValue = rankHand(props.player).handValue;

  return (
    <div className="players">
      <div className="players-name-rank">{props.player.name} </div>
      <div className="players-hand">
        <ShowCardList cards={props.player.playersHand} />
      </div>
      <div className="players-name-rank">{`${props.player.handValue}`}</div>
    </div>
  );
}
function PlayersCardsHeader() {
  return (
    <div className="players-top">
      <div className="players-hand-top">Navn</div>
      <div className="players-hand-top">Hånd</div>
      <div className="players-hand-top">Sum</div>
    </div>
  );
}

function PlayersCard(props: { players: Player[] }) {
  const playersList =
    props.players.length > 0
      ? props.players.map((aPlayer) => (
          <OnePlayersCards player={aPlayer} key={aPlayer.name} />
        ))
      : EMDASH;

  return (
    <div className="players-section">
      <PlayersCardsHeader />
      <div>{playersList}</div>
    </div>
  );
}
function PlayersCards(props: { players: Player[] }) {
  return (
    <>
      <PlayersCard players={props.players} />
    </>
  );
}
export default PlayersCards;
