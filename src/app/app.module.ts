import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubSearchComponent } from './github-search/github-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
