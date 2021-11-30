import { EventEmitter } from '@angular/core';
import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `<h2>Child Component</h2>
  <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  current count is {{count}}`
})

export class ChildComponent{
  @Input() count!: number
  @Output() countChanged: EventEmitter<number> = new EventEmitter()

  increment(){
    this.count++
    this.countChanged.emit(this.count)
  }

  decrement(){
    this.count--
    this.countChanged.emit(this.count)
  }

}
