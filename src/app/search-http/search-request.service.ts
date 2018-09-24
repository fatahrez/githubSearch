import { Injectable } from '@angular/core';
// import { Http, Response} from '@angular/http';
import { Search} from '../search'
import {HttpClient } from '@angular/common/http'
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
    search:Search;
    // link = 'https://api.github.com/repositories?q=';
    link= "http://api.github.com/users/";
    accessToken= environment.accessToken;
    user=[];
    constructor(private http: HttpClient) { 
      this.search = new Search('','','','','','')
    }
    performSearch(){
      interface ApiResponse{
        name: any,
        email: any,
        bio: any,
        url: any,
        company: any,
        location: any
      }

      // interface ApiResponses extends Array<ApiResponse>{
      // }
      let fullLink = this.link + "fatahrez" +this.accessToken;
      // const promise = new Promise((resolve, reject)=>{
        this.http.get<ApiResponse>(fullLink).toPromise().then(response =>{
          this.search.name = response.name;
          this.search.email= response.email;
          this.search.bio = response.bio;
          this.search.url = response.url;
          this.search.company = response.company;
          this.search.location = response.location;
          console.log(this.search);
        }),
        error=>{
          this.search.name = "Check your internet";
          this.search.email= "";
          this.search.bio = "";
          this.search.url = "";
          this.search.company = "";
          this.search.location = "";
        }
        return Promise;
  }



}