import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RightComponent } from './right.component';
import { UserComponent } from './user.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [UserComponent, RightComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: []
})

export class AdminModule{

}
