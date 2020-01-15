import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NumbersService} from '../../service/numbers.service';

@Component({
  selector: 'app-reverse-integer',
  templateUrl: './reverse-integer.component.html',
  styleUrls: ['./reverse-integer.component.css']
})
export class ReverseIntegerComponent implements OnInit {

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
    this.numberService.reverseInteger(+this.form.get('number1').value).subscribe(
      result => this.result = result.toString()
    );
  }

}
