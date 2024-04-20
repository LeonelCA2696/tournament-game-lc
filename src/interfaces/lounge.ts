import IGameTable from "./gameTable";
import IPlayer from "./player";

export default interface ILounge {
  gametables: IGameTable[];
  players: IPlayer[];

  joinTable(): IGameTable;
  addPlayer(player: IPlayer): boolean;
}
