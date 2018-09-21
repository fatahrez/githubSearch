import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Search } from '../search'

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

    // link = 'https://api.github.com/repositories?q=';
    link= "http://api.github.com/users/"
    accessToken= '?access_token=136fefe167f49c63fdd64405284a6c76df3f5f8c';
    user=[];
    constructor(private http: Http) { 
      this.http = http;
    }
    performSearch(search: HTMLInputElement): void{
      let fullLink = this.link + search.value +this.accessToken;
      this.http.get(fullLink).subscribe((res:Response)=>{
        this.user= res.json();
        console.log(this.user);
      })
}
}