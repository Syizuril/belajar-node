import { GithubService } from './github.service';
import { repos } from './repos';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpGet';
  userName: string = "Syizuril"
  repos?: repos[]

  loading: boolean = false
  errorMessage?: string

  constructor(private githubService: GithubService){

  }

  public getRepos(){
    this.loading = true
    this.errorMessage = ""
    this.githubService.getRepos(this.userName)
    .subscribe({
      next: (res) => {
        console.log('Response received');
        this.repos = res
      },
      error: (err) =>{
        console.log('Request failed with error');
        this.errorMessage = err
        this.loading = false
      },
      complete: () => {
        console.log('Request Completed');
        this.loading = false
      }
    })
  }
}
