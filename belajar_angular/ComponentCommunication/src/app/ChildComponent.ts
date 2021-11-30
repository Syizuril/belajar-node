import { EventEmitter } from '@angular/core';
import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `<h2>Child Component</h2>
  current count is {{count}}`
})

export class ChildComponent{
  count = 0;

  increment(){
    this.count++
  }

  decrement(){
    this.count--
  }
}
