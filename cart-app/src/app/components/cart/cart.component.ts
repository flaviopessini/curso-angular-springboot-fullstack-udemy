import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnChanges {
  @Input() items: CartItem[] = [];

  total: number = 0;

  @Output() idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    let itemsChanges = changes['items'];
    this.calculateTotal();
    this.saveSession();
    // if (!itemsChanges.firstChange) {
    //   this.saveSession();
    // }
  }

  deleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }

  calculateTotal() {
    this.total = this.items.reduce(
      (accum, i) => accum + i.quantity * i.product.price,
      0
    );
  }

  saveSession() {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
