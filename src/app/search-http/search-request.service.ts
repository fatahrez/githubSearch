import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Search } from '../search'
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
    search: Search;
    // link = 'https://api.github.com/repositories?q=';
    link= "http://api.github.com/users/"
    accessToken= '?access_token=136fefe167f49c63fdd64405284a6c76df3f5f8c';
    user=[];
    constructor(private http: HttpClient) { 
      this.search = new Search('','','','','','')
    }
    performSearch(search: HTMLInputElement){
      interface ApiResponse{
        name: any;
        email: any;
        bio: any;
        url: any;
        company: any;
        location: any;
      }
      let fullLink = this.link + search.value +this.accessToken;
      const promise = new Promise((resolve)=>{
        this.http.get<ApiResponse>(fullLink).toPromise().then(response =>{
          this.search.name = response.name;
          this.search.email= response.email;
          this.search.bio = response.bio;
          this.search.url = response.url;
          this.search.company = response.company;
          this.search.location = response.location;
          console.log(this.user);
          resolve();
        }),
        error=>{
          this.search.name = "Check your internet";
          this.search.email= "";
          this.search.bio = "";
          this.search.url = "";
          this.search.company = "";
          this.search.location = "";
        }
  }
      )
  return promise;
}
}