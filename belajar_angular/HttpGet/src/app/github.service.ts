import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GithubService {
  baseURL: string = "http://api.github.com/"

  constructor(private http: HttpClient){
  }

  getRepos(userName: string): Observable<any>{
    return this.http.get(this.baseURL+'users/'+userName+'/repos')
  }
}
