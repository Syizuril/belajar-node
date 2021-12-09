import { Component, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
  products?: Product[]
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

}
