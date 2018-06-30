import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { DomainModel } from '../domains.model';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DomainComponent implements OnInit {
  @Input() domain: DomainModel;
  @Output() delete = new EventEmitter<string>();

  constructor(private domainsService: DomainsService) { }

  ngOnInit() {
  }
}
