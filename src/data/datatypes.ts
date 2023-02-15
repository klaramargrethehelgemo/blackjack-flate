import * as data from "../deck.json";

export interface Player {
  name: string;
  playersHand: Card[];
  handValue: number;
  sum: number;
  progress: Stages;
}

export interface ContextType {
  shuffledDeckContext: Deck;
  playersContext: Player[];
  numberOfGamesContext: number;
  positionInDeckContext: number;
}

export type Deck = Card[];

export const CardIndex = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
];
export const DeckOfCards = data as Deck;

export interface Card {
  suit: Suit;
  face: Face;
  symbol: string;
}
export enum Stages {
  notFinished = "NF",
  finished = "F",
  looser = "L",
  winner = "W",
}

export enum Suit {
  klover = "c",
  ruter = "d",
  hjerter = "h",
  spar = "s",
}

export enum Face {
  to = 2,
  tre,
  fire,
  fem,
  seks,
  sju,
  atte,
  ni,
  ti,
  knekt,
  dame,
  konge,
  ess,
}

export enum PokerHands {
  StraightFlush = 1,
  FireLike,
  FulltHus,
  Flush,
  Straight,
  TreLike,
  ToPar,
  Par,
  BesteKort,
}

const emdashCharacterCode = 8212;
export const EMDASH = String.fromCharCode(emdashCharacterCode);
