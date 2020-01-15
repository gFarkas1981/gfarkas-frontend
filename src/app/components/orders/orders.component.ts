import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../service/order.service';
import {OrderModel} from '../../models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders : OrderModel[];
  constructor(private orderService : OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {

    this.orderService.getAllOrders().subscribe(
      (data: OrderModel[]) => {
        this.orders = data;
        console.log(data);

      },
    );
  }
}
