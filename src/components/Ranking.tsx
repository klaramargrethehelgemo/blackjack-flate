import React from "react";
import { EMDASH, Player } from "../data/datatypes";
import "./Ranking.css";

function Ranking(props: {
  players: Player[];
  imagePath: string;
  winner: string;
}) {
  function Place(props: { result: Player }) {
    return (
      <div>
        {props.result.name} {props.result.progress}
      </div>
    );
  }
  function Total(props: { result: Player }) {
    return (
      <div>
        {props.result.name} {props.result.sum}
      </div>
    );
  }

  function RankList(props: { players: Player[]; winner: string }) {
    const list =
      props.players.length > 0
        ? props.players.map((aPlayer) => (
            <Place key={aPlayer.name} result={aPlayer} />
          ))
        : EMDASH;

    const list2 =
      props.players.length > 0
        ? props.players.map((aResult) => (
            <Total key={aResult.name} result={aResult} />
          ))
        : EMDASH;

    return (
      <div className="players-section">
        <div className="players-name-rank">{list}</div>
        <div className="players-name-rank">{list2}</div>
      </div>
    );
  }

  return <RankList players={props.players} winner={props.winner} />;
}

export default Ranking;
