import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-cart-app',
  imports: [
    CommonModule,
    CatalogComponent,
    NavbarComponent,
    CartModalComponent,
  ],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.scss',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];

  items: CartItem[] = [];

  // total: number = 0;

  showCart: boolean = false;

  constructor(private service: ProductService) {
    //
  }

  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    // this.calculateTotal();
  }

  addToCart(p: Product) {
    const exists = this.items.find((i) => i.product.id == p.id);
    if (exists) {
      this.items = this.items.map((i) => {
        if (i.product.id == p.id) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      });
    } else {
      this.items = [...this.items, { product: p, quantity: 1 }];
    }

    // this.calculateTotal();
    // this.saveSession();
  }

  deleteCart(idProduct: number) {
    this.items = this.items.filter((i) => i.product.id != idProduct);
    if (this.items.length == 0) {
      sessionStorage.removeItem('cart');
      //sessionStorage.clear();
    }
    // this.calculateTotal();
    // this.saveSession();
  }

  // calculateTotal() {
  //   this.total = this.items.reduce(
  //     (accum, i) => accum + i.quantity * i.product.price,
  //     0
  //   );
  // }

  // saveSession() {
  //   sessionStorage.setItem('cart', JSON.stringify(this.items));
  // }

  openCloseCart() {
    this.showCart = !this.showCart;
  }
}
