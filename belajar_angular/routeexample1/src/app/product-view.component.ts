import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from './product.service';

@Component({
  template: `<h1>View Product</h1>`
})

export class ProductViewComponent {
  product?: Product

  constructor(private productService: ProductService, private route:ActivatedRoute){

  }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.productService.getProductById(id).subscribe(data=>{
      this.product = data
    })
  }
}
