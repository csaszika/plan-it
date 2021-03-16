import { Observable, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS as FirestoreSettingsToken } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgrxCoreConfigurationModule } from '@plan-it/ngrx-core/configuration';
import { environment } from '@plan-it/environments';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './shell/shell.component';
import { MainNavComponent } from './shell/main-nav/main-nav.component';

export class ObjectTranslateLoader implements TranslateLoader {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTranslation(lang: string): Observable<any> {
        return from(import(`../assets/i18n/${lang}.translation.ts`)).pipe(pluck('default'));
    }
}

const MATERIAL_MODULES = [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule];

@NgModule({
    declarations: [AppComponent, ShellComponent, MainNavComponent],
    imports: [
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        MATERIAL_MODULES,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                // useFactory: HttpLoaderFactory,
                useClass: ObjectTranslateLoader,
                deps: [HttpClient],
            },
        }),
        NgrxCoreConfigurationModule,
    ],
    providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
    bootstrap: [AppComponent],
})
export class AppModule {}
