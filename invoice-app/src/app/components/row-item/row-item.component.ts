import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tr[app-row-item]',
  imports: [CommonModule],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.scss',
})
export class RowItemComponent {
  @Input() item: Item = new Item();

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
