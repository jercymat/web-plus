import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/_shared/models/breadcrumb.model';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  breadcrumbContent: Breadcrumb;
  themeColor = '#D9BA74';

  constructor() {
    this.breadcrumbContent = {
      nodes: [
        '首頁',
        '相關連結'
      ]};
  }

  ngOnInit() {
  }

}
