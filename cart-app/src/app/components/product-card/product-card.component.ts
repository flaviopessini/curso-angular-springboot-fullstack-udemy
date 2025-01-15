import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'div[app-product-card]',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();

  addToCart(p: Product) {
    this.productEventEmitter.emit(p);
  }
}
