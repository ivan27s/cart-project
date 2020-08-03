import { Component, OnInit } from '@angular/core';
import {Product, ProductsService} from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  cartProducts: Product[];
  totalPrice: number;
  ngOnInit(): void {
    this.cartProducts = this.productsService.getProductsFromCart();
    this.totalPrice = this.productsService.getTotalPrice();
  }
  removeItem(id): void {
    this.productsService.removeProductFromCart(id);
    this.cartProducts = this.productsService.getProductsFromCart();
    this.totalPrice = this.productsService.getTotalPrice();
  }

}
