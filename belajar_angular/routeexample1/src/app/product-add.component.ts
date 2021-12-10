import { ProductService } from './../../../ServiceProduct/src/app/product.service';
import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<h1>Add Product</h1>`
})

export class ProductAddComponent {
  product?:Product

  constructor(private productService: ProductService, private route: ActivatedRoute){

  }

  ngOnInit(){

  }
}
