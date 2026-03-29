import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(public http: HttpClient) {}

  getAllProducts() {
    return this.http.get("https://api.everrest.educata.dev/shop/products/all?page_size=30");
  }

  getCategories() {
    return this.http.get("https://api.everrest.educata.dev/shop/products/categories");
  }

  filterByCategory(id: string) {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/category/${id}`);
  }
}