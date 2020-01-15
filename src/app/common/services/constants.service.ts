import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  // readonly api: string = 'http://localhost:4200';
  readonly api: string = 'https://gfarkas.com/springboot/api';

  constructor() { }
}
