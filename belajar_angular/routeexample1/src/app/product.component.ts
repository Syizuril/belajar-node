import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
  pageNo=0
  snapshotPageNo=0
  products?: Product[]
  constructor(private _activatedRoute: ActivatedRoute, private _router:Router){

  }

  ngOnInit(): void {
    this.snapshotPageNo = +this._activatedRoute.snapshot.queryParamMap.get('pageNum')!||0
    this._activatedRoute.queryParamMap.subscribe(params => {
      this.pageNo =+params.get('pageNum')!||0
      console.log('Query params', this.pageNo);

    })
  }


  nextPage(){
    this._router.navigate(['product'],{queryParams: {pageNum: this.pageNo+1}})
  }
}
