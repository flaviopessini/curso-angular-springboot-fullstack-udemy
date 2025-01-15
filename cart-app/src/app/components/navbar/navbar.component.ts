import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() items: CartItem[] = [];

  @Output() openCartEventEmitter: EventEmitter<any> = new EventEmitter();

  openCloseCart() {
    this.openCartEventEmitter.emit();
  }
}
