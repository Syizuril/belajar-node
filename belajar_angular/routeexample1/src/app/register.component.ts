import { IDeactivateComponent } from './ideactrivate-component.interface';
import { Component } from '@angular/core';
@Component({
  templateUrl: "./register.component.html"
})

export class RegisterComponent implements IDeactivateComponent{
  canExit(): boolean {
    if(confirm("Apakah kamu ingin melanjutkan ?")){
      return true
    }else{
      return false
    }
  }
}
