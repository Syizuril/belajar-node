import { CommonModule } from '@angular/common';
import { ProductListResolverService } from './product-list-resolver.servic';
import { DeactivateGuard } from './deactivateguard.service';
import { RegisterComponent } from './register.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductViewComponent } from './product-view.component';
import { ProductAddComponent } from './product-add.component';
import { LoginComponent } from './login.component';
import { AuthGuardService } from './auth-guard.service';
import { ProductGuardService } from './product-guard.service';
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
import { AuthService } from './auth.service';
import { DynamicComponent } from './dynamic.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, HomeComponent, ContactComponent, ProductComponent, ErrorComponent, ProductDetailComponent, LoginComponent, ProductAddComponent, ProductViewComponent, ProductEditComponent, RegisterComponent, DynamicComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, ProductGuardService, AuthService, AuthGuardService, DeactivateGuard, ProductListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
