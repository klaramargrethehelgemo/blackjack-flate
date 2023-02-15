import React, { useState } from "react";
import "./App.css";
import { Deck, Player } from "./data/datatypes";
import ControlPanel from "./components/ControlPanel";
import appContext from "./utilities/appContext";
import initialize from "./utilities/initialize";

function App() {
  const spillerne = initialize().spillerne;
  const theShuffledDeck = initialize().theShuffledDeck;

  const [shuffledDeck, setShuffledDeck] = useState(theShuffledDeck);
  const [players, setPlayers] = useState(spillerne);
  const [numberOfGames, setNumberOfGames] = useState(0);
  const [positionInDeck, setPositionInDeck] = useState(0);

  const incNumberOfGames = () => {
    let k = numberOfGames + 1;
    setNumberOfGames(k);
  };
  const incPositionInDeck = (pos: number) => {
    let k = positionInDeck + pos;
    setPositionInDeck(k);
  };

  const contextObj = {
    shuffledDeckContext: shuffledDeck as Deck,
    playersContext: players as Player[],
    numberOfGamesContext: numberOfGames,
    positionInDeckContext: positionInDeck,
    incNumberOfGames,
    incPositionInDeck,
    setShuffledDeck,
    setPlayers,
  };

  return (
    <appContext.Provider value={contextObj}>
      <div className="App-header">
        <h1>BlackJack - Klaras løsning</h1>
      </div>
      <div className="App-body">
        <ControlPanel />
      </div>
    </appContext.Provider>
  );
}

export default App;
