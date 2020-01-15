import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../common/services/constants.service';

@Injectable({providedIn: 'root'})
export class FtpService {

  constructor(private http: HttpClient, private _constant: ConstantsService) {

  }

  downloadCV() {
    return this.http.get(this._constant.api + '/ftpdownload');
  }

}
