import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  @Input() products: Product[] = [];

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();

  addToCart(p: Product) {
    this.productEventEmitter.emit(p);
  }
}
