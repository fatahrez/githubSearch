import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  constructor(private http:Http) { }S
  ngOnInit() {
  }

}
