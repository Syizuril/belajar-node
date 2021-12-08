import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HttpPost';
  people?: Person[]
  person = new Person()

  constructor(private apiserVice: ApiService){

  }

  ngOnInit(): void {
    this.refreshPeople()
  }

  refreshPeople(){
    this.apiserVice.getPeople()
    .subscribe(data => {
      console.log(data);
      this.people = data
    })
  }

  addPerson(){
    this.apiserVice.addPeople(this.person).subscribe(
      data => {
        console.log(data);
        this.refreshPeople()
      }
    )
  }
}
