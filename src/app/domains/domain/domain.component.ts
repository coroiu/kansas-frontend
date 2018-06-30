import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { DomainModel } from '../domains.model';
import { DomainsService } from '../domains.service';
import { Subject } from 'rxjs/Subject';
import { debounceTime, switchMap } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DomainComponent implements OnInit {
  @Input() domain: DomainModel;
  @Output() delete = new EventEmitter<string>();

  private updateSubject = new Subject<void>();

  isUpdating = false;

  constructor(private domainsService: DomainsService) { }

  ngOnInit() {
    this.updateSubject.pipe(
      debounceTime(500),
      switchMap(_ => this.domainsService.put(this.domain))
    ).subscribe(_ => {
      this.isUpdating = false;
    });
  }

  updateDomain() {
    this.isUpdating = true;
    this.updateSubject.next();
  }
}
