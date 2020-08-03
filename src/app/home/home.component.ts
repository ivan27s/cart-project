import { Component, OnInit } from '@angular/core';
import {Product, ProductsService} from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService) {}
  products: Product[];

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  addToCart(id): void {
    this.productsService.addProductInCart(id);
  }

}
