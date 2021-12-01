import { ChangeDetectionStrategy } from '@angular/compiler';
import { OnInit, OnChanges, SimpleChanges, SimpleChange, Input, Component, DoCheck, KeyValueDiffers } from '@angular/core';

import { Costumer } from './costumer'

@Component({
  selector:`child-component`,
  template:`
    <h2>Child Component</h2>
    <p>Message {{message}}</p>
    <p>Costumer Name {{costumer.name}}</p>
    <p>Costumer Code {{costumer.code}}</p>
    <p>Do Check Count {{DoCheckCount}}</p>
    <ul><li *ngFor="let log of changelog">{{log}}</li></ul>`
})

export class ChildComponent implements OnChanges, OnInit, DoCheck {

  @Input() message: string
  @Input() costumer: Costumer
  changelog: string[] = [];
  oldCostumer: Costumer = new Costumer
  DoCheckCount=0
  differ: any

  constructor(private differs: KeyValueDiffers){

  }

  ngOnInit(): void {
    console.log('OnInit');
    this.oldCostumer = Object.assign({}, this.costumer)
    this.differ = this.differs.find(this.costumer).create()
  }

  ngDoCheck(): void {
    console.log(`DoCheck`);
    this.DoCheckCount++

    const costumerChanges = this.differ.diff(this.costumer)

    if(costumerChanges){
      console.log(costumerChanges);
      costumerChanges.forEachChangedItem((r: { key: string; currentValue: any; }) => this.changelog.push(`changed`+r.key+''+JSON.stringify(r.currentValue)))
      costumerChanges.forEachAddedItem((r: { key: string; currentValue: any; })=> this.changelog.push(`added`+r.key+''+JSON.stringify(r.currentValue)))
      costumerChanges.forEachRemovedItem((r: { key: string; currentValue: any; }) => this.changelog.push(`removed` + r.key + '' + JSON.stringify(r.currentValue)))

    }
    // if(this.oldCostumer.name !== this.costumer.name || this.oldCostumer.code !== this.costumer.code){
    //   const to = JSON.stringify(this.costumer)
    //   const from = JSON.stringify(this.oldCostumer)
    //   const changeLog = `DoCheck costumer: changed from ${from} to ${to}`
    //   this.changelog.push(changeLog)

    //   this.oldCostumer = Object.assign({}, this.costumer)
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(JSON.stringify(changes));


    for(const propName in changes){
      const change = changes[propName]
      const to = JSON.stringify(change.currentValue)
      const from = JSON.stringify(change.previousValue)
      const changeLog = `${propName}:changed from ${from} to ${to}`
      this.changelog.push(changeLog)
    }
  }
}
