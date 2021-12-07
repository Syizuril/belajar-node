import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormBuilder';

  contactForm

  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['',[Validators.required]],
      isMarried: ['',[Validators.required]],
      country: ['',[Validators.required]],
      address: this.formBuilder.group({
        city: ['',[Validators.required]],
        street: ['',[Validators.required]],
        pincode: ['',[Validators.required]]
      })
    })
  }

  get firstname(){
    return this.contactForm.get('firstname') as FormControl
  }

  get lastname(){
    return this.contactForm.get('lastname') as FormControl
  }

  get email(){
    return this.contactForm.get('email')
  }

  get gender(){
    return this.contactForm.get('gender')
  }

  get isMarried(){
    return this.contactForm.get('isMarried')
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city(){
    return this.contactForm.get('city')
  }

  get street(){
    return this.contactForm.get('street')
  }

  get pincode(){
    return this.contactForm.get('pincode')
  }

  countryList: country[] = [
    new country("1", "Indonesia"),
    new country("2", "USA"),
    new country("3", "Inggirs")
  ]

  onSubmit(){
    console.log(this.contactForm.value);

  }
}

export class country{
  id: string
  name: string

  constructor(id: string, name:string){
    this.id = id
    this.name = name
  }
}
