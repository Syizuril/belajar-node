import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
  template:`<h1>Passing Dynamic Data Demo</h1>
  <br>{{product|json}}`
})

export class DynamicComponent implements OnInit {
  product: any

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    console.log(this.router.getCurrentNavigation()?.extras.state);

  }

  ngOnInit(): void {
    this.product = history.state
  }

}
