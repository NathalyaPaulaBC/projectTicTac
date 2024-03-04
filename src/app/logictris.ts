import { Player } from './game-status';

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export class Logictris {
  // Data matrix
  data: Map<number, Player> = new Map();

  player: Player = Player.X
  win: boolean = false
  winner: Player | undefined
  draw: boolean = false

  fields = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  public constructor() {
  }

  reset() {
    this.data = new Map()
    this.player = Player.X
    this.win = false
    this.winner = undefined
    this.draw = false
  }

  // Data entry
  setData(position: number, value: Player) {
    this.data.set(position, value);
    console.log(this.data);
  }

  getData(position: number) {
    return this.data.get(position) || '';
  }

  changePlayer() {
    this.player = this.player == Player.X ? Player.O : Player.X
  }

  validation() {
    combinations.forEach(x => { // Combination analysis
      if (this.win) return // Winner if winner is true
      var comb = true
      x.forEach(z => {
        if (this.player != this.data.get(z)) { // Validation of combinations
          comb = false;
        }
      })
      if (comb) { // When there is a combination defines winner
        this.win = true
        this.winner = this.player
      }
      if (this.data.size == 9 && !this.win) { // If complete all combinations and there is no winner then it is a draw.
        this.draw = true
      }
    })
  }
}
