import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConstantsService} from '../common/services/constants.service';

@Injectable({providedIn: 'root'})
export class NumbersService {

  constructor(private http: HttpClient, private _constant: ConstantsService) {

  }

  subtract(number1: number, number2: number): Observable<number> {
    return this.http.get<number>(this._constant.api + '/subtract/' + number1 + '/' + number2);
  }

  isPrime(number1: number): Observable<string> {
    return this.http.get(this._constant.api + '/isprime/' + number1, {responseType: 'text'});
  }

  reverseInteger(number1: number): Observable<string> {
    return this.http.get(this._constant.api + '/reversenumber/' + number1, {responseType: 'text'});
  }

  isPalindrome(number1: number): Observable<string> {
    return this.http.get(this._constant.api + '/ispalindrome/' + number1, {responseType: 'text'});
  }

  fibonaccisUnder(number1: number): Observable<string> {
    return this.http.get(this._constant.api + '/fibonaccisunder/' + number1, {responseType: 'text'});
  }

  largestPrimefactor(number1: number): Observable<string> {
    return this.http.get(this._constant.api + '/largestprimefactor/' + number1, {responseType: 'text'});
  }

}
