import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmailModel} from '../models/email.model';
import {ConstantsService} from '../common/services/constants.service';


@Injectable({providedIn: 'root'})
export class EmailService {

  constructor(private http: HttpClient, private _constant: ConstantsService) {
  }

  sendEmail(email: EmailModel): Observable<any> {
    return this.http.post(this._constant.api + '/sendemail', email);
  }

}
