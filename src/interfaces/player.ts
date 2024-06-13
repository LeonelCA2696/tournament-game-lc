export default interface IPlayer {
  readonly id: string;
  readonly name: string;
  score: number;
  increaseScore(): number;
}
