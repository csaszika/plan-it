import { Observable, of } from 'rxjs';

export class TranslateServiceStub {
  /* tslint:disable:rxjs-finnish */
  use(): Observable<any> {
    return of('hu');
  }
  /* tslint:enable:rxjs-finnish */

  getBrowserLang(): string {
    return 'hu';
  }
}
