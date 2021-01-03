import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { APIComponent } from './components/api/api.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    APIComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
