import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { SearchRequestService } from './search-http/search-request.service';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserRepoComponent } from './user-repo/user-repo.component'

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubSearchComponent,
    RepositoriesComponent,
    UserRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }