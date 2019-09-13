import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Event as NavigationEvent, NavigationEnd, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, filter, map, share } from 'rxjs/operators';

import { MenuItem } from '../types/menu-item.interface';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'pi-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];

  @ViewChild(MatSidenav, { static: true }) drawer!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    debounceTime(1),
    map((result: BreakpointState) => result.matches),
    share()
  );

  /* istanbul ignore next */
  navigationEnd$: Observable<NavigationEvent> = this.router.events.pipe(filter((event: NavigationEvent) => event instanceof NavigationEnd));

  constructor(private readonly breakpointObserver: BreakpointObserver, private readonly router: Router) {}

  /* istanbul ignore next */
  ngOnInit(): void {
    combineLatest([this.isHandset$, this.navigationEnd$])
      .pipe(
        map(([isHandset, navigationEnd]: [boolean, NavigationEvent]) => isHandset),
        filter((isHandset) => isHandset)
      )
      .subscribe(() => {
        this.drawer.close();
      });
  }
}
