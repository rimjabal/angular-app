import { Injectable } from '@angular/core';

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

@Injectable({ providedIn: 'root' })
export class Product {
  private products: ProductItem[] = [
    { id: 1, name: 'Computer', price: 2300, selected: true },
    { id: 2, name: 'Printer', price: 1200, selected: false },
    { id: 3, name: 'Smart Phone', price: 1100, selected: true }
  ];

  getAllProducts(): ProductItem[] {
    return this.products;
  }

  deleteProduct(product: ProductItem): void {
    this.products = this.products.filter((p) => p.id !== product.id);
  }
}
