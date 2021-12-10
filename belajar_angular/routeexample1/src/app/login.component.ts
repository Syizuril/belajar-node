import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from './auth.service'
import { Component, OnInit } from "@angular/core";


@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  invalidCredentialMsg?: string
  username?: string
  password?: string
  retUrl: string = "home"

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute){

  }


  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.retUrl = params.get('retUrl') || ""
      console.log('LoginComponen/ngOnInit'+this.retUrl)
    })
  }


  onFormSubmit(loginForm: any){
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe( data => {
      console.log('return to '+data+" "+this.retUrl);
      if(this.retUrl!==null){
        this.router.navigate([this.retUrl])
      }else{
        this.router.navigate(['home'])
      }
    })
  }
}
