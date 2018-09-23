import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  link= "http://api.github.com/repositories?q="
  accessToken= environment.accessToken;

  constructor(private http: Http) {

   }
   searchArray=[];
   performSearch(search: HTMLInputElement): void{
    let fullLink = this.link + search.value +this.accessToken;
    this.http.get(fullLink).subscribe((res:Response)=>{
      this.searchArray= res.json();
      console.log(this.searchArray);
    })
  }
   
  ngOnInit() {
  }

}
