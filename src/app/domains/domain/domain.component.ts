import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DomainModel } from '../domains.model';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DomainComponent implements OnInit {
  @Input() domain: DomainModel;

  constructor() { }

  ngOnInit() {
  }

  remove() {
  }

}
