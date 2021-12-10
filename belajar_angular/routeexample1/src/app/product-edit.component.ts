import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  template:`<h1>Edit Product</h1>`
})

export class ProductEditComponent {
  product?: Product

  constructor(private productService: ProductService, private route: ActivatedRoute){

  }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.productService.getProductById(id).subscribe(data => {
      this.product = data
    })
  }

}
