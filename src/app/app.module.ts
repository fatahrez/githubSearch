import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { SearchRequestService } from './search-http/search-request.service';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserRepoComponent } from './user-repo/user-repo.component'
import { MaterialModule } from './material';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }