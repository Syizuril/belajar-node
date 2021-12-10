import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
  product?: Product
  id?: any

  constructor(private _Activateroute:ActivatedRoute, private _router:Router, private _productService: ProductService){

  }

  // using subscribe

  sub?: any

  ngOnInit(){
    this.sub = this._Activateroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this._productService.getProductById(this.id).subscribe(data => {
        this.product = data;
      })
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe
  }

  onBack():void{
    this._router.navigate(['product'])
  }
}
