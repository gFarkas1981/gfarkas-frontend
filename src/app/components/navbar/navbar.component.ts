import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isSelected: string;

  constructor() {
  }

  onClick(event) {

    this.isSelected = event.target.id;

  }

}
