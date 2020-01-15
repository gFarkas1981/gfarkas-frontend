import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../service/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[];
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {

    this.productService.getAllProducts().subscribe(
      (data: ProductModel[]) => {
        this.products = data;
        console.log(data);

      },
    );
  }
}
