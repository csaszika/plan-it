import { Observable, of } from 'rxjs';
import { LANGUAGE_HU } from '../../shared/constants/languages.constants';

export class TranslateServiceStub {
  /* tslint:disable:rxjs-finnish */
  use(): Observable<any> {
    return of(LANGUAGE_HU);
  }
  /* tslint:enable:rxjs-finnish */

  getBrowserLang(): string {
    return LANGUAGE_HU;
  }
}
