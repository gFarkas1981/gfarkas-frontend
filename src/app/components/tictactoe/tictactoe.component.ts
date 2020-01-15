import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TictactoeService} from '../../service/tictactoe.service';
import {TicTacToeGameModel} from '../../models/ticTacToeGame.model';


@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})

export class TictactoeComponent implements OnInit {

  form: FormGroup;

  strengths = ['Easy (Random movement)', 'Medium (Own logic)', 'Impossible (MiniMax algorithm'];
  ticTacToeGame: TicTacToeGameModel;
  gameHasStarted = false;

  constructor(private tictactoeService: TictactoeService, private formBuilder: FormBuilder) {

    this.ticTacToeGame = new TicTacToeGameModel();
    console.log(this.ticTacToeGame);
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      strengthControl: [0],
      player1Control: [null],
      player2Control: [null],
      playWithCPUControl: false
    });

  }


  public changeChecked(value: boolean) {
    this.ticTacToeGame.checked = value;

    if (!this.ticTacToeGame.checked) {

      this.ticTacToeGame.player2 = '';

    }

    console.log(this.ticTacToeGame.checked);
  }

  public changeStrength($event, strengthValue) {
    this.ticTacToeGame.strength = strengthValue;
  }

  public changePlayer1($event) {
    this.ticTacToeGame.player1 = $event;
  }

  public changePlayer2($event) {
    this.ticTacToeGame.player2 = $event;
  }

  newGame() {

    this.tictactoeService.sendChanges(this.ticTacToeGame).subscribe(
      () => console.log('tattarara')
    );
    this.gameHasStarted = true;

  }


}

