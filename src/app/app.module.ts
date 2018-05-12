import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
