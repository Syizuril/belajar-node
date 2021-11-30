import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Selamat Datang di {{title}}</h1>
    <child-component [count]=Counter (countChanged)="countChangedHandler($event)"></child-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCommunication';
  Counter = 5

  countChangedHandler(count: number){
    this.Counter = count
    console.log(count);
  }
}
