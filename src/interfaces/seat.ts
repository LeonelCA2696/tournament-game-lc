import IPlayer from "./player";

export default interface ISeat {
  readonly isOcupied: boolean;
  readonly player: IPlayer | null;
  occupy(player: IPlayer): boolean;
  leave(): boolean;
  getOcupant(): IPlayer | null;
}
