import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NumbersService} from '../../service/numbers.service';

@Component({
  selector: 'app-largest-primefactor',
  templateUrl: './largest-primefactor.component.html',
  styleUrls: ['./largest-primefactor.component.css']
})
export class LargestPrimefactorComponent implements OnInit {

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
    this.numberService.largestPrimefactor(+this.form.get('number1').value).subscribe(
      result => this.result = result.toString()
    );
  }

}
