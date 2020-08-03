import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

export interface Product {
  id: number;
  name: string;
  label: string;
  price: number;
  countInCart?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private messageService: MessageService) { }
  private products: Product[] = [
    {id: 1, name : 'article 1', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 25},
    {id: 2, name: 'article 2', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price : 35},
    {id: 3, name: 'article 3', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 45}
  ];
  private productsInCart: Product[] = [];
  getProducts(): Product[] {
    return this.products;
  }
  getProductsFromCart(): Product[] {
    this.productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
    return this.productsInCart;
  }
  getTotalPrice(): number {
    return this.productsInCart.reduce((sum, el) => {
      sum += el.price;
      return sum;
    }, 0);
  }
  addProductInCart(id): void {
    if (this.productsInCart.find(el => el.id === id)) {
      this.messageService.add('Товар уже в корзине');
      return;
    } else {
      const product = this.products.find(el => el.id === id);
      product.countInCart = 1;
      this.productsInCart.push(product);
      localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
      this.messageService.add('Товар добавлен в корзину');
    }
  }
  removeProductFromCart(id): void {
    this.productsInCart = this.productsInCart.filter(el => el.id !== id);
    localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
  }
}
