import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';
@Injectable()
export class ProductListResolverService implements Resolve<Product>{
  constructor(private productService: ProductService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    console.log("Product List Resolver is called");
    return this.productService.getProducts()
  }

}
