import { ProductGuardService } from './product-guard.service';
import { ProductSpecComponent } from './product-spec.component';
import { ProductOverviewComponent } from './product-overview.component';
import { ProductComponent } from './product.component';
import { ContactComponent } from './contact.component';
import { Routes } from "@angular/router";
import { HomeComponent } from './home.component';
import { ErrorComponent } from './error.component';
import { ProductDetailComponent } from './product-detail.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductComponent, canActivate: [AuthGuardService],
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
