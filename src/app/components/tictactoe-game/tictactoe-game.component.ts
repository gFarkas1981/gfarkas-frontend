import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TictactoeService} from '../../service/tictactoe.service';
import {TicTacToeGameModel} from '../../models/ticTacToeGame.model';

@Component({
  selector: 'app-tictactoe-game',
  templateUrl: './tictactoe-game.component.html',
  styleUrls: ['./tictactoe-game.component.css']
})
export class TictactoeGameComponent implements OnInit {

  @Input() player1Name: string;
  @Input() player2Name: string;

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  lineColor = '#ddd';
  lineStart: number;
  lineLength: number;
  canvasSize: number;
  sectionSize: number;
  innerWidth: any;
  tttGameModel: TicTacToeGameModel;

  constructor(private tictactoeService: TictactoeService) {
    this.tttGameModel = new TicTacToeGameModel();
    this.tttGameModel.player1 = this.player1Name;
    this.tttGameModel.player2 = this.player2Name;
    this.tttGameModel.p1Score = 0;
    this.tttGameModel.p2Score = 0;
    console.log('Constructor');

  }

  ngOnInit() {

    this.innerWidth = window.innerWidth;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvasSize = this.innerWidth / 3;
    this.sectionSize = this.canvasSize / 3;
    this.canvas.nativeElement.width = this.canvasSize;
    this.canvas.nativeElement.height = this.canvasSize;
    this.ctx.translate(0.5, 0.5);
    this.lineStart = 4;
    this.lineLength = this.canvasSize - this.canvasSize / 100;
    this.drawLines(this.lineColor);
    this.fillUpBoard('');

  }

  drawLines(strokeStyle) {

    this.ctx.lineWidth = this.canvasSize / 50;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.beginPath();

    /*
   * Horizontal lines
   */
    for (let y = 1; y <= 2; y++) {
      this.ctx.moveTo(this.lineStart, y * this.sectionSize);
      this.ctx.lineTo(this.lineLength, y * this.sectionSize);
    }

    /*
     * Vertical lines
     */
    for (let x = 1; x <= 2; x++) {
      this.ctx.moveTo(x * this.sectionSize, this.lineStart);
      this.ctx.lineTo(x * this.sectionSize, this.lineLength);
    }

    this.ctx.stroke();

  }

  addPlayingPiece(mouse, player) {
    let xCordinate;
    let yCordinate;

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        xCordinate = x * this.sectionSize;
        yCordinate = y * this.sectionSize;

        if (mouse.x >= xCordinate && mouse.x <= xCordinate + this.sectionSize &&
          mouse.y >= yCordinate && mouse.y <= yCordinate + this.sectionSize) {

          this.clearPlayingArea(xCordinate, yCordinate);

          if (player === 1) {

            this.drawX(xCordinate, yCordinate);

          } else {

            this.drawO(xCordinate, yCordinate);

          }

        }
      }
    }
  }

  fillUpBoard(brd) {

    let board = [];

    if (brd) {

      board = brd.split('');

    }

    let xCordinate;
    let yCordinate;
    let i = 0;

    for (let y = 0; y < 3; y++) {

      for (let x = 0; x < 3; x++) {

        xCordinate = x * this.sectionSize;
        yCordinate = y * this.sectionSize;

        this.clearPlayingArea(xCordinate, yCordinate);
        if (board[i] !== undefined) {

          if (board[i].toLowerCase() === 'x') {

            this.drawX(xCordinate, yCordinate);

          } else if (board[i].toLowerCase() === 'o') {

            this.drawO(xCordinate, yCordinate);

          }

          i++;

        }

      }

    }

    this.drawLines(this.lineColor);

  }

  drawO(xCordinate, yCordinate) {
    const halfSectionSize = (0.5 * this.sectionSize);
    const centerX = xCordinate + halfSectionSize;
    const centerY = yCordinate + halfSectionSize;
    const radius = (this.sectionSize * 0.60) / 2;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    this.ctx.strokeStyle = '#01bBC2';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    this.ctx.stroke();
  }

  drawX(xCordinate, yCordinate) {
    this.ctx.strokeStyle = '#f1be32';

    this.ctx.beginPath();

    const offset = 50;
    this.ctx.moveTo(xCordinate + offset, yCordinate + offset);
    this.ctx.lineTo(xCordinate + this.sectionSize - offset, yCordinate + this.sectionSize - offset);

    this.ctx.moveTo(xCordinate + offset, yCordinate + this.sectionSize - offset);
    this.ctx.lineTo(xCordinate + this.sectionSize - offset, yCordinate + offset);

    this.ctx.stroke();
  }

  clearPlayingArea(xCordinate, yCordinate) {
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(
      xCordinate,
      yCordinate,
      this.sectionSize,
      this.sectionSize
    );
  }

  fireEvent(e) {

    let node = -1;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log('Coordinate x: ' + x,
      'Coordinate y: ' + y);

    const oneThird = this.canvasSize / 3;

    if (x < oneThird && y < oneThird) {

      node = 0;

    } else if (y < oneThird && x > oneThird && x < oneThird * 2) {

      node = 1;

    } else if (y < oneThird && x > oneThird * 2 && x < oneThird * 3) {

      node = 2;

    } else if (y > oneThird && y < oneThird * 2 && x < oneThird) {

      node = 3;

    } else if (y > oneThird && y < oneThird * 2 && x > oneThird && x < oneThird * 2) {

      node = 4;

    } else if (y > oneThird && y < oneThird * 2 && x > oneThird * 2 && x < oneThird * 3) {

      node = 5;

    } else if (y > oneThird * 2 && y < oneThird * 3 && x < oneThird) {

      node = 6;

    } else if (y > oneThird * 2 && y < oneThird * 3 && x > oneThird && x < oneThird * 2) {

      node = 7;

    } else if (y > oneThird * 2 && y < oneThird * 3 && x > oneThird * 2 && x < oneThird * 3) {

      node = 8;

    }

    this.tttGameModel.node = node;

    this.tictactoeService.sendNode(this.tttGameModel).subscribe(
      (data: TicTacToeGameModel) => {
        this.tttGameModel = data;
        this.fillUpBoard(this.tttGameModel.board);
        console.log(data);

      },
    );

  }

  newGame() {

    this.tictactoeService.tictactoenewstart(this.tttGameModel).subscribe(
      (data: TicTacToeGameModel) => {
        this.tttGameModel = data;
        this.fillUpBoard(this.tttGameModel.board);
        console.log('NEW START: ' + data);

      },
    );
  }

}
