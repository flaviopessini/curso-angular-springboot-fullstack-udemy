import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  imports: [],
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.scss'
})
export class InvoiceViewComponent {

  @Input() id!: number;
  @Input() name!: string;
}
