import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { debounceTime, map, share } from 'rxjs/operators';
import { MenuItem } from '../types/menu-item.interface';

@Component({
  selector: 'pi-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  @Input() menuItems: MenuItem[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    debounceTime(1),
    map((result) => result.matches),
    share()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
