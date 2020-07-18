import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Event as NavigationEvent, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { debounceTime, filter, map, share } from 'rxjs/operators';

import { LANGUAGE_EN, LANGUAGE_HU } from '../../shared/constants/languages.constants';
import { MenuItem } from '../types/menu-item.interface';

@Component({
  selector: 'pi-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit, OnDestroy {
  @Input() menuItems: MenuItem[] = [];

  @ViewChild(MatSidenav, { static: true }) drawer!: MatSidenav;

  langHU = LANGUAGE_HU;
  langEN = LANGUAGE_EN;
  currentLanguage: string = this.translateService.currentLang;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    debounceTime(1),
    map((result: BreakpointState) => result.matches),
    share()
  );

  /* istanbul ignore next */
  navigationEnd$: Observable<NavigationEvent> = this.router.events.pipe(filter((event: NavigationEvent) => event instanceof NavigationEnd));

  private readonly subsciptions = new Subscription();

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly translateService: TranslateService
  ) {}

  /* istanbul ignore next */
  ngOnInit(): void {
    this.subsciptions.add(combineLatest([this.isHandset$, this.navigationEnd$])
      .pipe(
        map(([isHandset, navigationEnd]: [boolean, NavigationEvent]): boolean => isHandset),
        filter((isHandset: boolean) => isHandset)
      )
      .subscribe(() => {
        this.drawer.close();
      }));
  }

  ngOnDestroy(): void {
    this.subsciptions.unsubscribe();
  }

  onClickHUTranslation(): void {
    this.translateService.use(LANGUAGE_HU);
    this.currentLanguage = LANGUAGE_HU;
  }

  onClickENTranslation(): void {
    this.translateService.use(LANGUAGE_EN);
    this.currentLanguage = LANGUAGE_EN;
  }
}
