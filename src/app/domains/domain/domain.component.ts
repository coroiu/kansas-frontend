import { Component, OnInit, Input } from '@angular/core';
import { DomainModel } from '../domains.model';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {
  @Input() domain: DomainModel;

  constructor() { }

  ngOnInit() {
  }

  remove() {
  }

}
