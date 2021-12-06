import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component'
import { ReactiveComponent } from './reactive.component';


const routes: Routes = [
  {path: 'template', component: TemplateComponent},
  {path: 'reactive', component: ReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
