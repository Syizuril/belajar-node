import { Component } from '@angular/core';
import { Costumer } from './costumer'

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>Message: <input type="text" [(ngModel)]="message"></p>
    <p>Code: <input type="text" [(ngModel)]="code"></p>
    <p>Name: <input type="text" [(ngModel)]="name"></p>
    <p><button (click)="updateCostumer()">Update</button></p>
    <child-component [message]=message [costumer]=costumer></child-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLifeCycle';
  message = '';
  costumer: Costumer = new Costumer()
  name = '';
  code = 0;

  updateCostumer(){
    this.costumer = new Costumer();
    this.costumer.name = this.name
    this.costumer.code = this.code
  }
}
