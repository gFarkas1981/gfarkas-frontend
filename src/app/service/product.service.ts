import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../common/services/constants.service';

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(private http: HttpClient, private _constant: ConstantsService) { }

  getAllProducts() {
    return this.http.get(this._constant.api + '/products');
  }



}
