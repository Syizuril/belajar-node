import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HTTPRequest';
  userName: string = "syizuril"
  baseUrl: string = "https://api.github.com/"
  repos?: Repos[]

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.getRepos()
  }

  public getRepos(){
    return this.http.get<Repos[]>(this.baseUrl+'users/'+this.userName+'/repos')
    .subscribe({
      next: (response) =>{
        console.log("Response Received");
        console.log(response);
        this.repos = response
      },
      error: (e)=>{
        console.log("Request failed with error");
        alert(e)
      },
      complete:()=>{
        console.log('Request Completed');
      }
    }
    )
  }

}

export class Repos{
  id?: string
  name?: string
  html_url?: string
  description?: string
}
