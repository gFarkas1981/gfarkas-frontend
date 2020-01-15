import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NumbersService} from '../../service/numbers.service';

@Component({
  selector: 'app-is-prime',
  templateUrl: './is-prime.component.html',
  styleUrls: ['./is-prime.component.css']
})
export class IsPrimeComponent implements OnInit {

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
    this.numberService.isPrime(+this.form.get('number1').value).subscribe(
      result => this.result = result.toString()
    );
  }

}
