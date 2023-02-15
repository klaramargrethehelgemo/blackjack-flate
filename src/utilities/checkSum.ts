import { Card, Face, Player, Stages } from "../data/datatypes";

const findValue = (card: Card) => {
  let value;
  switch (card.face) {
    case Face.to:
      value = 2;
      break;
    case Face.tre:
      value = 3;
      break;
    case Face.fire:
      value = 4;
      break;
    case Face.fem:
      value = 5;
      break;
    case Face.seks:
      value = 6;
      break;
    case Face.sju:
      value = 7;
      break;
    case Face.atte:
      value = 8;
      break;
    case Face.ni:
      value = 9;
      break;
    case Face.ti:
      value = 10;
      break;
    case Face.knekt:
      value = 10;
      break;
    case Face.dame:
      value = 10;
      break;
    case Face.konge:
      value = 10;
      break;
    case Face.ess:
      value = 11;
      break;
    default:
      value = 0;
  }
  return value;
};
const checkSum = (player: Player) => {
  let result: Stages = Stages.notFinished;
  if (player.handValue < 17) {
    result = Stages.notFinished;
    return result;
  }
  if (player.handValue > 16 && player.handValue < 21) {
    result = Stages.finished;
    return result;
  }
  if (player.handValue === 21) {
    result = Stages.winner;
    return result;
  }
  if (player.handValue > 21) {
    result = Stages.looser;
    return result;
  }
  return result;
};
export function rankHand(player: Player): Player {
  let sum = 0;
  player.playersHand.forEach((aCard) => {
    sum += findValue(aCard);
  });
  player.handValue = sum;
  player.progress = checkSum(player);
  return player;
}
