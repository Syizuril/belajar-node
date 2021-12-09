import { Injectable } from "@angular/core";
import { Product } from "./product.model";

export class ProductService {
  public getProducts(){
    let products: Product[]

    products=[
      new Product(1, 'Memory Card',500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100)
    ]

    return products
  }

  public getProductById(id: number){
    let product: Product[] = this.getProducts();
    return product.find(p => p.productID == id)
  }
}
