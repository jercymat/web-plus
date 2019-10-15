import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/_shared/models/breadcrumb.model';

@Component({
  selector: 'app-about-target',
  templateUrl: './about-target.component.html',
  styleUrls: ['./about-target.component.scss']
})
export class AboutTargetComponent implements OnInit {
  breadcrumbContent: Breadcrumb;
  themeColor = '#8F437A';

  constructor() {
    this.breadcrumbContent = {
      nodes: [
        '首頁',
        '關於我們',
        '團隊目標'
      ]
    };
  }

  ngOnInit() {
  }

}
