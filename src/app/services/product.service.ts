import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [
    new Product(1,'product 1','This is product 1 description.The product is really cool',100),
    new Product(2,'product 2','This is product 2 description.The product is really cool',200),
    new Product(3,'product 3','This is product 3 description.The product is really cool',300),
    new Product(4,'product 4','This is product 4 description.The product is really cool',400),
    new Product(5,'product 5','This is product 5 description.The product is really cool',500),
    new Product(6,'product 6','This is product 6 description.The product is really cool',600),
    new Product(7,'product 7','This is product 7 description.The product is really cool',700),
    new Product(8,'product 8','This is product 8 description.The product is really cool',500),
  ]

  constructor() { }
  
  getProducts():Product[] {
    return this.products
  }
}
