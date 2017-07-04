import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecentTweetsComponent } from './recent-tweets/recent-tweets.component';
import { HashtagOverviewComponent } from './hashtag-overview/hashtag-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentTweetsComponent,
    HashtagOverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
