import { LayoutModule } from '@angular/cdk/layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shell/dashboard/dashboard.component';
import { MainNavComponent } from './shell/main-nav/main-nav.component';
import { ShellComponent } from './shell/shell.component';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, '/assets/i18n/', '.translation.ts');
// }

export class ObjectTranslateLoader implements TranslateLoader {
  // tslint:disable:rxjs-finnish
  getTranslation(lang: string): Observable<any> {
    return from(import(`../assets/i18n/${lang}.translation.ts`)).pipe(pluck('default'));
  }
}

@NgModule({
  declarations: [AppComponent, ShellComponent, MainNavComponent, DashboardComponent],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useFactory: HttpLoaderFactory,
        useClass: ObjectTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
