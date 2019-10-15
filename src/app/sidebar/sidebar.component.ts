import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarBg$: Observable<string>;
  sidebarBgColor = '#F6F0F3';

  constructor(private router: Router) { }

  ngOnInit() {
    this.sidebarBg();
  }

  sidebarBg() {
    this.sidebarBg$ = this.router.events.pipe(
      filter(val => val instanceof NavigationEnd),
      map((val: NavigationEnd) => {
        console.log(val.url);
        if (val.url.indexOf('/videos') >= 0) {
          return '#F4F6F9';
        } else if (val.url.indexOf('/resources') >= 0) {
          console.log('resources!!!!!!');
          return '#F4F8F9';
        } else if (val.url.indexOf('/links') >= 0) {
          return '#FCF9F4';
        } else {
          return '#F6F0F3';
        }
      })
    );
  }

}
