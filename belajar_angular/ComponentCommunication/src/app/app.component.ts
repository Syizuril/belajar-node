import { ChildComponent } from './ChildComponent';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>Selamat Datang di {{title}}</h1>
    <p>current count is {{child.count}}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <child-component></child-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCommunication';

  @ViewChild(ChildComponent) child: ChildComponent | any

  increment(){
    this.child.increment
  }

  decrement(){
    this.child.decrement
  }

}
