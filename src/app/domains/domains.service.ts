import { Injectable } from '@angular/core';
import { ApiClientService } from '../core/api-client.service';
import { Observable } from 'rxjs/Observable';
import { DomainModel } from './domains.model';

@Injectable()
export class DomainsService {
  readonly DOMAINS_URL = 'domains';

  constructor(private api: ApiClientService) { }

  list(): Observable<DomainModel[]> {
    return this.api.get(this.DOMAINS_URL);
  }

  post(): Observable<any> {
    return this.api.post(this.DOMAINS_URL);
  }

  put(domain: DomainModel): Observable<any> {
    return this.api.put(this.DOMAINS_URL + `/${domain.id}`, domain);
  }

  delete(id: string): Observable<any> {
    return this.api.delete(this.DOMAINS_URL + `/${id}`);
  }
}
