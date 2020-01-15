import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../service/client.service';
import {ClientModel} from '../../models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients : ClientModel[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {

    this.clientService.getAllClients().subscribe(
      (data: ClientModel[]) => {
        this.clients = data;
        console.log(data);

      },
    );
  }
}
