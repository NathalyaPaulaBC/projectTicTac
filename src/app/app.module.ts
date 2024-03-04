import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewTrisComponent } from './overview-tris/overview-tris.component';

import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    OverviewTrisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
