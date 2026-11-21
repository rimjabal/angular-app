import { Component, OnInit } from '@angular/core';
import { Product, ProductItem } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: ProductItem[] = [];

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.products = this.productService.getAllProducts();
  }

  handleDelete(product: ProductItem): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
