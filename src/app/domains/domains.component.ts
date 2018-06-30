import { Component, OnInit } from '@angular/core';
import { DomainModel } from './domains.model';
import { DomainsService } from './domains.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  isLoading = false;
  domains: DomainModel[];

  constructor(private domainsService: DomainsService) { }

  ngOnInit() {
    this.loadDomains();
  }

  loadDomains() {
    this.isLoading = true;
    this.domainsService
      .list()
      .subscribe(d => {
        this.isLoading = false;
        this.domains = d;
      });
  }

  addDomain() {
    this.isLoading = true;
    this.domainsService
      .post()
      .subscribe(_ => this.loadDomains());
  }

  deleteDomain(id: string) {
    this.isLoading = true;
    this.domainsService
      .delete(id)
      .subscribe(_ => this.loadDomains());
  }
}
