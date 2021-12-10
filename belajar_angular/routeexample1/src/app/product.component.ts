import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
  products?: Product[];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
        this.products = data;
      })
  }
}
