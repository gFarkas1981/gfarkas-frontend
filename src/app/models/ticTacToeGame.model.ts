export class TicTacToeGameModel {
  node: number;
  cpuStep: number;
  afterMove: number; // 0 = "X", 1 = "O"
  nextStep: number;
  message: string;
  p1Score: number;
  p2Score: number;
  whoWon: String;
  gameOver:boolean;
  actualname: String;
  beforeFirstStep: boolean;
  board: string;
  player1: string;
  player2: string;
  checked: boolean;
  strength: number;
}
