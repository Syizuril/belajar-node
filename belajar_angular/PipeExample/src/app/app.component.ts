import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PipeExample';

  toDate: string | null | undefined

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {

    this.toDate = this.datePipe.transform(new Date());
  }


  msg: string = `Uppercase Lowercase`

  num: number = 12395.2354
  per: number = .7414;

  cur: number = 175;

  Fahrenheit!: number;
  Celcius!: number;
}
