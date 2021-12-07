import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';

  countryList: country[] = [
    new country("1", "Indonesia"),
    new country("2", "USA"),
    new country("3", "England")
  ]

  contactForm = new FormGroup({
    firstname: new FormControl('Syihab'),
    lastname: new FormControl('',[Validators.required, Validators.minLength(10)]),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormControl({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })

  onSubmit(){
    console.log(this.contactForm.value);

  }
}

export class country {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}
