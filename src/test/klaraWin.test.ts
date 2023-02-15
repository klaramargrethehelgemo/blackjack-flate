import { Card, Face, Player, Stages, Suit } from "../data/datatypes";

import { rankHand } from "../utilities/checkSum";

const klarasHand: Card[] = [
  {
    suit: Suit.hjerter,
    face: Face.ti,
    symbol: "\uD83C\uDCBA",
  },
  {
    suit: Suit.klover,
    face: Face.ess,
    symbol: "\uD83C\uDCCB",
  },
];
const klara: Player = {
  name: "Klara",
  playersHand: klarasHand,
  handValue: 0,
  sum: 0,
  progress: Stages.notFinished,
};
const magnusHand: Card[] = [
  {
    suit: Suit.hjerter,
    face: Face.seks,
    symbol: "\uD83C\uDCC9",
  },
  {
    suit: Suit.ruter,
    face: Face.atte,
    symbol: "\uD83C\uDCCC",
  },
  {
    suit: Suit.spar,
    face: Face.ni,
    symbol: "\uD83C\uDCC8",
  },
];
const magnus: Player = {
  name: "Magnus",
  playersHand: magnusHand,
  handValue: 0,
  sum: 0,
  progress: Stages.notFinished,
};

test("klara win two cards", () => {
  expect(rankHand(klara).handValue).toStrictEqual(21);
  expect(rankHand(klara).progress).toStrictEqual(Stages.winner);
  expect(rankHand(magnus).handValue).toStrictEqual(23);
  expect(rankHand(magnus).progress).toStrictEqual(Stages.looser);
});
/*
test("straight2", () => {
    expect(straight(temphand2)).toStrictEqual(result2);
    expect(result2).not.toStrictEqual(StraightFlush(temphand2));
});
 */
