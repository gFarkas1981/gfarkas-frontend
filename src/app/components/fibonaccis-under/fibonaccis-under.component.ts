import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NumbersService} from '../../service/numbers.service';

@Component({
  selector: 'app-fibonaccis-under',
  templateUrl: './fibonaccis-under.component.html',
  styleUrls: ['./fibonaccis-under.component.css']
})
export class FibonaccisUnderComponent implements OnInit {

  form: FormGroup;
  result: string;

  constructor(private numberService: NumbersService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      number1: [null]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.numberService.fibonaccisUnder(+this.form.get('number1').value).subscribe(
      result => this.result = result.toString()
    );
  }

}
