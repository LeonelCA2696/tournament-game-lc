import IRound from "./round";
import IPlayer from "./player";

export default interface IGame {
  rounds: IRound[];
  champion: IPlayer;

  nextRound(): IRound;
}
