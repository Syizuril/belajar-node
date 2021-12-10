import { ProductGuardService } from './../product-guard.service';
import { ProductSpecComponent } from './product-spec.component';
import { ProductOverviewComponent } from './product-overview.component';
import { ProductComponent } from './product.component';
import { ContactComponent } from './contact.component';
import { Routes } from "@angular/router";
import { HomeComponent } from './home.component';
import { ErrorComponent } from './error.component';
import { ProductDetailComponent } from './product-detail.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'product', component: ProductComponent, canActivate: [ProductGuardService],
  children: [
    { path:'detail/:id', component: ProductDetailComponent,
    children: [
      {path: 'overview', component: ProductOverviewComponent},
      {path: 'spec', component: ProductSpecComponent},
      {path: '', redirectTo:'overview', pathMatch:"full"}
    ] }]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
]
