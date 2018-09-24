import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {RoutingModule} from './routing/routing.module'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { SearchRequestService } from './search-http/search-request.service';
import { MaterialModule } from './material';
import { LandingPageComponent } from './landing-page/landing-page.component';

// const routes:Routes=[
//   {path:"landingPage",component:LandingPageComponent},
//   {path:"search",component:GithubSearchComponent},
//   {path:"",redirectTo:"/landingPage",pathMatch:"full"}
  
// ]
@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubSearchComponent,
    LandingPageComponent,
    RoutingModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }