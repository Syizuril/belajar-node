import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StructuralDirective';
  showMe: boolean
  cssStringVar: String = `red size20`;
  cssArray: string[] = ['red', 'size20'];
  cssClass: CssClass = new CssClass()
  color: String = `red`;

  show = true;

  movies: any[];
  mTitle:string=""
  mDirector:string=""

  ngOnInit(){
    this.Refresh()
  }

  remove(i:any){
    this.movies.splice(i,1)
  }

  addMovie(){
    this.movies.push({title: this.mTitle, director: this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }

  Refresh(){
    console.log(`Refresh`);
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore' },
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder' },
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo' },
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer' },
      { title: 'Warcraft', director: 'Duncan Jones' },
    ]
  }

  trackByFn(index: any, item: { title: any; }){
    return item.title;
  }
}

class CssClass {
  red: boolean = true
  size20: boolean = true
}

class Movie {
  title: string
  director: string
}
