import { LoggerService } from './logger.service';
import { ProductService } from './product.service';
import { Product } from './product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, LoggerService]
})

export class AppComponent {
  title = 'ServiceProduct';

  products?:Product[]

  constructor(private productService:ProductService){
  }

  getProduct(){
    this.products = this.productService.getProducts()
  }
}
