import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NumbersService} from '../../service/numbers.service';

@Component({
  selector: 'app-is-palindrome',
  templateUrl: './is-palindrome.component.html',
  styleUrls: ['./is-palindrome.component.css']
})
export class IsPalindromeComponent implements OnInit {

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
    this.numberService.isPalindrome(+this.form.get('number1').value).subscribe(
      result => this.result = result.toString()
    );
  }

}
