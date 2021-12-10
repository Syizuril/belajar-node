import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing Module';

  constructor(private _authService: AuthService, private _router: Router){

  }

  logout(){
    this._authService.loggoutUser()
    this._router.navigate(['home'])
  }
}
