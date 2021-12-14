import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `
     <ul>
       <li><a [routerLink]="['/static']">Static Data</a></li>
       <li><a [routerLink]="['/dynamic']" [state]=product>Dynamic Data</a></li>
    </ul>

    <p>Id :   <input type="text" [(ngModel)]="product.id" > </p>
    <p>name :<input type="text" [(ngModel)]="product.name" > </p>
    <button (click)="goToDynamic()" >Goto Dynamic Component</button>`
})

export class HomeComponent{
  public product = {id:'1', name: 'angular'}

  constructor(private router: Router){

  }

  goToDynamic(){
    this.router.navigateByUrl('/dynamic', {state: this.product})
  }

}
