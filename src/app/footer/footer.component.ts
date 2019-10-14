import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerBg$: Observable<string>;
  footerBgColor = '#8F437A';

  constructor(private router: Router) {
    // this.footerBg$ = router.events.subscribe(val => {
    //   console.log(val instanceof NavigationEnd);
    //   if (val instanceof NavigationEnd) {
    //     console.log(val);
    //   }
    // });
  }

  ngOnInit() {
    this.footerBg();
  }

  footerBg() {
    const colors = {
      '/': '#8F437A',
      '/about': '#8F437A',
      '/videos': '#758AB2',
      '/resources': '#87B3BF',
      '/links': '#D9BA74'
    }
    this.footerBg$ = this.router.events.pipe(
      filter(val => val instanceof NavigationEnd),
      map((val: NavigationEnd) => colors[val.url])
    );
  }

}
