import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { gte } from './gte.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Validators';

  myForm = new FormGroup({
    numVal: new FormControl('',[gte(10)])
  })

  get numVal(){
    return this.myForm.get('numVal')
  }

  onSubmit(){
    console.log(this.myForm.value);

  }
}
