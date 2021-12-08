// import { gteValidatorService } from './gte.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { gte_async } from './gte-async.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Validators';

  // constructor(private gteValidator: gteValidatorService){

  // }


  // this.mainForm = this.bulder.group({
  //   userName: ["". [Validators.required, Validators.minLength(10)]],
  //   password: ["", [Validators.required]]
  // }. {Validator: Validators.compose(
  //   [
  //     this.matchPassword, Validators.req
  //   ]
  // )})

  //  Async Validator
  myForm = new FormGroup({
    numVal: new FormControl('',null, [gte_async])

  })

  // Sync Validator
  // myForm = new FormGroup({
  //   numVal: new FormControl('',[this.gteValidator.gte(10)])
  // })

  get numVal(){
    return this.myForm.get('numVal')
  }

  onSubmit(){
    console.log(this.myForm.value);

  }
}
