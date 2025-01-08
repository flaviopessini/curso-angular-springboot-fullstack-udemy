import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice {
    return { ...this.invoice, total: this.calculateTotal() };
  }

  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter((i) => i.id != id);
    return this.getInvoice();
  }

  save(item: Item): Invoice {
    this.invoice.items = [...this.invoice.items, item];
    return this.getInvoice();
  }

  calculateTotal() {
    // let total = 0;
    // this.invoice.items.forEach((i) => {
    //   total += i.total();
    // });
    // return total;
    return this.invoice.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
