import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../common/services/constants.service';

@Injectable({providedIn: 'root'})
export class OrderService {

  constructor(private http: HttpClient,private _constant: ConstantsService) {

  }

  getAllOrders() {
    return this.http.get( + this._constant.api + '/orders');
  }



}
