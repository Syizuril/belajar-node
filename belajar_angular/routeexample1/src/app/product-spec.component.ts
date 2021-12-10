import { ActivatedRoute, Router } from '@angular/router';
import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from './product.service';

@Component({
  template: `<h3>Spesification of {{product?.name}}</h3><hr>`
})

export class ProductSpecComponent{
  product?: Product
  id: any
  sub: any

  constructor(private _Activateroute: ActivatedRoute, private _router: Router, private _productService: ProductService){

  }

  ngOnInit(){
    this.sub = this._Activateroute.parent?.params.subscribe(params => {
      this.id = params['id']
      this._productService.getProducts().subscribe(data => {
        let product = data
        this.product = product.find(p => p.productID == this.id)
      })
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe
  }
}
