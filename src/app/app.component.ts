import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { AppData } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'mean-contacts-app';

  someData: any;

  constructor(private http: HttpClient){
  
  }

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
             .toPromise()
             .then(res => { this.someData = res });
  }
}
