import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GithubService {
  baseURL: string = "http://api.github.com/"

  constructor(private http: HttpClient){
  }

  getRepos(userName: string, PageNo: string, SortOn: string): Observable<any>{
    let params = new HttpParams()
    .set('page',PageNo)
    .set('sort',SortOn)

    return this.http.get(this.baseURL+'users/'+userName+'/repos', {params})
  }
}
