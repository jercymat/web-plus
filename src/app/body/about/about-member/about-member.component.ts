import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/_shared/models/breadcrumb.model';

@Component({
  selector: 'app-about-member',
  templateUrl: './about-member.component.html',
  styleUrls: ['./about-member.component.scss']
})
export class AboutMemberComponent implements OnInit {
  breadcrumbContent: Breadcrumb;
  themeColor = '#8F437A';

  constructor() {
    this.breadcrumbContent = {
      nodes: [
        '首頁',
        '關於我們',
        '團隊成員'
      ]
    };
  }

  ngOnInit() {
  }

}
