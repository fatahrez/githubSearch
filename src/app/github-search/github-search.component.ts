import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { SearchRequestService } from '../search-http/search-request.service'
import { Search } from '../search';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  search: Search;
  name;
  bio;
  blog;
  email;
  company;
  location;
  // link = 'https://api.github.com/repositories?q=';
  link= "http://api.github.com/users/"
  accessToken= '?access_token=136fefe167f49c63fdd64405284a6c76df3f5f8c';
  searchArray=[];
  constructor(private searchRequestService: SearchRequestService, private http: Http) {
    this.searchRequestService = searchRequestService;
    
   }
  performSearch(search: HTMLInputElement): void{
    let fullLink = this.link + search.value +this.accessToken;
    this.http.get(fullLink).subscribe((res:Response)=>{
      this.searchArray= res.json();
      console.log(this.searchArray);
    })
  }
  // searchArray: [];
  ngOnInit() {

    this.searchRequestService.performSearch();
    this.search= this.searchRequestService.search;
    this.name = this.searchRequestService.search.name;
    this.bio = this.searchRequestService.search.bio;
    this.blog = this.searchRequestService.search.url;
    this.email = this.searchRequestService.search.email;
    this.company = this.searchRequestService.search.company;
    this.location = this.searchRequestService.search.company;
    
    console.log(this.search);
    
  }

}
