import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnlineStatusComponent } from './online-status/online-status.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, OnlineStatusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
