import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { AppData } from './app';
import { AppService } from './app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: any;

  constructor(private appService: AppService){
  
  }

  ngOnInit(){
    this.appService.getContacts().subscribe(res => {
      this.contacts = res;
    })
  }
}
