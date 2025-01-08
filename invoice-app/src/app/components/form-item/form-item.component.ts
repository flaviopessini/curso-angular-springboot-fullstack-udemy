import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.scss',
})
export class FormItemComponent {
  private counterId = 4;

  @Output() addItemEventEmitter = new EventEmitter();

  item = this.newItem();

  onSubmit(itemForm: NgForm) {
    if (itemForm.valid) {
      this.addItemEventEmitter.emit({ id: this.counterId, ...this.item });
      this.counterId++;
      this.item = this.newItem();
      itemForm.reset();
      itemForm.resetForm();
    }
  }

  private newItem(): any {
    return {
      product: '',
      price: 0,
      quantity: 0,
    };
  }
}
