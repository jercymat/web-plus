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
    const colors = {
      '/': '#F6F0F3',
      '/about': '#F6F0F3',
      '/videos': '#F4F6F9',
      '/resources': '#F4F8F9',
      '/links': '#FCF9F4'
    }
    this.sidebarBg$ = this.router.events.pipe(
      filter(val => val instanceof NavigationEnd),
      map((val: NavigationEnd) => colors[val.url])
    );
  }

}
