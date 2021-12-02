import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contact: contact
  @ViewChild('contactForm') contactForm: NgForm

  ngOnInit(): void {
    this.contact = {
      firstname: "Budi",
      lastname: "Andi",
      email: "budiandi@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "jalan kenangan",
        pincode: "11111"
      }
    }

    setTimeout(() => {
     this.contactForm.setValue(this.contact)
    });
  }

  title = 'AngularForm - Template Driven Forms';

  changeCountry(){
    this.contact.country = "1";
  }

  reset() {
    this.contactForm.reset();
  }

  resetForm() {
    this.contactForm.resetForm();
  }

  countryList: country[] = [
    new country("1","Indonesia"),
    new country("2", "USA"),
    new country("3","England")
  ]

  onSubmit(contactForm: NgForm){
    console.log(contactForm.value);
  }

  setDefaults(){
    this.contactForm.setValue(this.contact)
  }

  patchValue(){
    let obj = {
      firstname: "Andi",
      lastname:"Budi",
      email: "nani@gmail.com"
    }

    this.contactForm.control.patchValue(obj)
  }

  changeAddress(){
    let obj = {
      city: "Jakarta",
      street: "Jalan pinggir jalan",
      pincode: "12345"
    }

    let address = this.contactForm.controls["address"] as FormControl

    address.patchValue(obj)
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

export class contact {
  firstname: string
  lastname: string
  email: string
  gender: string
  isMarried: boolean
  country: string
  address: {
    city: string
    street: string
    pincode: string
  }
}
