import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm - Template Driven Forms';

  countryList: country[] = [
    new country("1","Indonesia"),
    new country("2", "USA"),
    new country("3","England")
  ]

  onSubmit(contactForm: NgForm){
    console.log(contactForm.value);
  }
}

export class country {
  id: string
  name: string

  constructor(id:string, name:string){
    this.id=id
    this.name=name
  }
}
