import IGame from "./game";
import ISeat from "./seat";

export default interface IGameTable {
  game: IGame;
  seats: ISeat[];

  startGame(): IGame;
}
