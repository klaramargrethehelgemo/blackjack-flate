import { Deck, Player, Stages } from "../data/datatypes";
import * as data1 from "./testdata/magnus_win_tocards.json";
import * as data2 from "./testdata/klara_win_fourcards.json";

import { rankHand } from "../utilities/checkSum";
import dealCards from "../utilities/dealCards";

const klara: Player = {
  name: "Klara",
  playersHand: [],
  handValue: 0,
  sum: 0,
  progress: Stages.notFinished,
};
const magnus: Player = {
  name: "Magnus",
  playersHand: [],
  handValue: 0,
  sum: 0,
  progress: Stages.notFinished,
};

test("Deal card Magnus wins two cards", () => {
  dealCards(klara, data1 as Deck, 0, 2);
  dealCards(magnus, data1 as Deck, 2, 2);
  expect(rankHand(klara).handValue).toStrictEqual(20);
  expect(rankHand(klara).progress).toStrictEqual(Stages.finished);
  expect(rankHand(magnus).handValue).toStrictEqual(21);
  expect(rankHand(magnus).progress).toStrictEqual(Stages.winner);
});
test("Deal card Klara wins four cards", () => {
  dealCards(klara, data2 as Deck, 0, 2);
  dealCards(magnus, data2 as Deck, 2, 2);

  expect(rankHand(klara).handValue).toStrictEqual(20);
  expect(rankHand(klara).progress).toStrictEqual(Stages.finished);
  expect(rankHand(magnus).handValue).toStrictEqual(21);
  expect(rankHand(magnus).progress).toStrictEqual(Stages.winner);
});
