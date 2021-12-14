import { DashboardComponent } from './dashboard.component';
import { RightComponent } from './right.component';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'admin', component: DashboardComponent,
   children:
   [
     {path: 'user', component: UserComponent},
     {path: 'rights', component: RightComponent}
   ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class AdminRoutingModule {

}
