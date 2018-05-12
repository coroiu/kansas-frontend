import { Component, OnInit } from '@angular/core';
import { DomainModel } from './domains.model';
import { DomainsService } from './domains.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  domains: DomainModel[];

  constructor(private domainsService: DomainsService) { }

  ngOnInit() {
    this.domainsService
      .list()
      .subscribe(d => this.domains = d);
  }

}
