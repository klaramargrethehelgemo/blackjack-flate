import React from "react";

function Winner(props: { winner: string }) {
  return (
    <div>
      {props.winner === "Magnus" ?? (
        <img
          src={window.location.origin + "/magnus.png"}
          height="200px"
          width="200px"
          alt="magnus"
        />
      )}
      {props.winner === "Klara" ?? (
        <img
          src={window.location.origin + "/Klara_kort.png"}
          height="200px"
          width="200px"
          alt="klara"
        />
      )}
      {props.winner === "To vinnere" ?? (
        <>
          <h6>Vi er her</h6>
          <img
            src={window.location.origin + "/Klara_kort.png"}
            height="200px"
            width="200px"
            alt="klara"
          />
          <img
            src={window.location.origin + "/magnus.png"}
            height="200px"
            width="200px"
            alt="magnus"
          />
        </>
      )}
    </div>
  );
}
export default Winner;
