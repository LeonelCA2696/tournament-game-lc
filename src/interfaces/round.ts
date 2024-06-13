import IPlayer from "./player";

export default interface IRound {
  readonly roundNumber: number;
  readonly winner: IPlayer;
  determineWinner(): IPlayer;
}
