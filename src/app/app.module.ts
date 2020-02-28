import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import {DateAgoPipe } from './date-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ContentComponentComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
