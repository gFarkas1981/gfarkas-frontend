import {Component, OnInit} from '@angular/core';
import {NumbersService} from '../../service/numbers.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-subtract-form',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent implements OnInit {

  form: FormGroup;
  result: string;

  constructor(private numberService: NumbersService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      number1: [null],
      number2: [null]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.numberService.subtract(+this.form.get('number1').value, +this.form.get('number2').value).subscribe(
      result => this.result = result.toString(),
      error1 => console.warn(error1)
    );
  }

}
