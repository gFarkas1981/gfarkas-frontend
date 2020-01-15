import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Demo';
  greeting = {};

  constructor(private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }


}
