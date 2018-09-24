import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import {LandingPageComponent} from '../landing-page/landing-page.component'
import {GithubSearchComponent} from '../github-search/github-search.component'

const routes:Routes=[
  {path:"landingPage",component:LandingPageComponent},
  {path:"search",component:GithubSearchComponent},
  {path:"",redirectTo:"/landingPage",pathMatch:"full"}
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
