import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DomainsComponent } from './domains/domains.component';
import { DomainsService } from './domains/domains.service';
import { ApiClientService } from './core/api-client.service';
import { DomainComponent } from './domains/domain/domain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    DomainsComponent,
    DomainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule,
    FormsModule
  ],
  providers: [
    ApiClientService,
    DomainsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
