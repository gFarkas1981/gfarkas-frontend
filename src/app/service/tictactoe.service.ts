import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../common/services/constants.service';

@Injectable({providedIn: 'root'})
export class TictactoeService {

  constructor(private http: HttpClient, private _constant: ConstantsService) {

  }

  sendChanges(data) {
    return this.http.post(this._constant.api + '/tictactoe/', data);
  }

  sendNode(data) {
    return this.http.post(this._constant.api + '/tictactoenext/', data)
  }

  tictactoenewstart(data) {
    return this.http.post(this._constant.api + '/tictactoenewstart/', data)
  }

}
