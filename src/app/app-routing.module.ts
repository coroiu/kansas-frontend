import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { DomainsComponent } from './domains/domains.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '', component: NavComponent, outlet: 'nav' },

  { path: 'home', children: [
    { path: '', component: HomeComponent },
  ]},
  { path: 'domains', component: DomainsComponent },

  { path: '', component: FooterComponent, outlet: 'footer' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
