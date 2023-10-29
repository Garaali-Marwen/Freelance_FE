import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: [
    './back-office.component.css',
    '../../../assets/vendor/css/core.css',
    '../../../assets/vendor/css/theme-default.css',
    '../../../assets/css/demo.css',
    '../../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BackOfficeComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isSizeLarge: boolean = false;
  destroyed = new Subject<void>();

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            if (this.isSizeLarge !== !(this.displayNameMap.get(query) !== 'Large' && this.displayNameMap.get(query) !== 'XLarge')) {
              this.isSizeLarge = !(this.displayNameMap.get(query) !== 'Large' && this.displayNameMap.get(query) !== 'XLarge');
            }
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  toggleMenu(open: boolean) {
    this.isMenuOpen = open;
  }

  ngOnInit() {
  }
}
