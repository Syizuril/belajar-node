import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
@Component({
  template: `<h3>Overview of {{product?.name}}</h3><br>`
})

export class ProductOverviewComponent {
  product?: Product
  id:any
  sub:any

  constructor(private _Activateroute: ActivatedRoute, private _router:Router, private _productService:ProductService){

  }

  ngOnInit(){
    this.sub = this._Activateroute.parent?.params.subscribe(params => {
      this.id = params['id']
      let product = this._productService.getProducts()
      this.product = product.find(p=> p.productID == this.id)
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
