import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Selamat Datang di {{title}}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <child-component [MyCount]=Counter></child-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCommunication';
  Counter = 5;
  increment(){
    this.Counter++;
  }

  decrement(){
    this.Counter--;
  }
}
{}
