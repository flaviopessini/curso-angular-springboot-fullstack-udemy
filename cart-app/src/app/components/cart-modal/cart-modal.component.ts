import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart-modal',
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss',
})
export class CartModalComponent {
  @Input() items: CartItem[] = [];

  // @Input() total: number = 0;

  @Output() idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  @Output() closeCartEventEmitter: EventEmitter<any> = new EventEmitter();

  closeCart() {
    this.closeCartEventEmitter.emit();
  }

  deleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }
}
