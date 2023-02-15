import React, { useContext, useState } from "react";
import dealCards from "../utilities/dealCards";
import appContext from "../utilities/appContext";
import { ContextType, Player, Stages } from "../data/datatypes";
import ShuffledDeck from "./ShuffledDeck";
import PlayersCards from "./PlayersCards";
import Ranking from "./Ranking";
import rankAll from "../utilities/rankAll";
///import initialize from "../utilities/initialize";
import Winner from "./Winner";
import { rankHand } from "../utilities/checkSum";

function ControlPanel() {
  const context: any = useContext(appContext);

  const contextData: ContextType = {
    shuffledDeckContext: context.shuffledDeckContext,
    playersContext: context.playersContext,
    numberOfGamesContext: context.numberOfGamesContext,
    positionInDeckContext: context.positionInDeckContext,
  };

  const [winner, setWinner] = useState("");
  const [ferdig, setFerdig] = useState(false);
  const delUt = () => {
    const klara = dealCards(
      context.playersContext[0],
      context.shuffledDeckContext,
      context.positionInDeckContext,
      2
    );

    context.playersContext[0] = klara.thePlayer;
    context.positionInDeckContext = klara.theIndex;

    const magnus = dealCards(
      context.playersContext[1],
      context.shuffledDeckContext,
      context.positionInDeckContext,
      2
    );
    context.playersContext[1] = magnus.thePlayer;
    context.positionInDeckContext = magnus.theIndex;
    let result = rankAll(context.playersContext);
    context.playersContext = result.players;
    if (result.winner) {
      setWinner(result.winner);
    } else {
      automatDelUtKort(context.playersContext[0]);
      context.playersContext[1].progress = Stages.notFinished;
      while (
        (!(
          context.playersContext[1].handValue >
          context.playersContext[0].handValue
        ) &&
          context.playersContext[1].progress !== Stages.looser) ||
        context.playersContext[1].progress === Stages.notFinished ||
        (context.playersContext[0].progress === Stages.winner &&
          context.playersContext[1].progress !== Stages.looser) ||
        context.playersContext[1].handValue === 20
      ) {
        context.playersContext[1].progress = Stages.notFinished;
        automatDelUtKort(context.playersContext[1]);
      }
    }

    context.incNumberOfGames();
  };
  const automatDelUtKort = (player: Player) => {
    console.log(player.progress);
    while (player.progress === Stages.notFinished) {
      const dealOne = dealCards(
        player,
        context.shuffledDeckContext,
        context.positionInDeckContext,
        1
      );
      player = dealOne.thePlayer;
      context.positionInDeckContext = dealOne.theIndex;
      rankHand(player);
    }
  };

  const spillPaaNytt = () => {
    if (ferdig) window.location.reload();
    setFerdig(true);
    delUt();
  };
  return (
    <div className="App-body">
      <ShuffledDeck shuffledDeck={contextData.shuffledDeckContext} />
      <div className="controlpanel">
        <button onClick={spillPaaNytt}>Spill</button>
      </div>

      {contextData.numberOfGamesContext > 0 && (
        <PlayersCards players={contextData.playersContext} />
      )}
      {contextData.numberOfGamesContext > 0 && (
        <Ranking
          players={contextData.playersContext}
          winner={winner}
          imagePath={""}
        />
      )}
      <Winner winner={winner} />
    </div>
  );
}
export default ControlPanel;
