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
    this.footerBg$ = this.router.events.pipe(
      filter(val => val instanceof NavigationEnd),
      map((val: NavigationEnd) => {
        console.log(val.url);
        if (val.url.indexOf('/videos') >= 0) {
          return '#758AB2';
        } else if (val.url.indexOf('/resources') >= 0) {
          console.log('resources!!!!!!');
          return '#87B3BF';
        } else if (val.url.indexOf('/links') >= 0) {
          return '#D9BA74';
        } else {
          return '#8F437A';
        }
      })
    );
  }

}
