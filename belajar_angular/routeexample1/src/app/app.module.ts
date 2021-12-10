import { ProductGuardService } from './../product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error.component';
import { ContactComponent } from './contact.component';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, ContactComponent, ProductComponent, ErrorComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
