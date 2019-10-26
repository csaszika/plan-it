import { Observable, of } from 'rxjs';

export class TranslateServiceStub {
  use(): Observable<any> {
    return of('hu');
  }
}
