import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `<h2>Child Component</h2>
  current count is {{count}}`
})

export class ChildComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    for(let property in changes){
      if(property === 'count'){
        console.log('Previous', changes[property].previousValue);
        console.log('Current', changes[property].currentValue)
        console.log('FirstChange', changes[property].firstChange)
      }
    }
  }

  @Input(`MyCount`)
  count!: number;

  private _count = 0;
}
