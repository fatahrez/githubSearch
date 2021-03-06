import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'
import { Http, Response} from '@angular/http'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  link= "http://api.github.com/users/"
  accessToken= environment.accessToken;
  searchArray:any; 
  constructor(private http:Http) { }
  userArray:any;
  performSearch(): void{
    let userLink = this.link + "fatahrez" + this.accessToken;
    this.http.get(userLink).subscribe((res:Response)=>{
      this.userArray= res.json();
      console.log(this.userArray);
    })
    let fullLink = this.link + "fatahrez" +"/repos" +this.accessToken;
    this.http.get(fullLink).subscribe((res:Response)=>{
      this.searchArray= res.json();
      console.log(this.searchArray);
    })
  }

  ngOnInit() {
  }
}