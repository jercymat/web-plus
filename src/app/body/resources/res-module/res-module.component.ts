import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/_shared/models/breadcrumb.model';

@Component({
  selector: 'app-res-module',
  templateUrl: './res-module.component.html',
  styleUrls: ['./res-module.component.scss']
})
export class ResModuleComponent implements OnInit {
  breadcrumbContent: Breadcrumb;
  themeColor = '#87B3BF';

  constructor() {
    this.breadcrumbContent = {
      nodes: [
        '首頁',
        '教案分享',
        '教學模組'
      ]
    };
  }

  ngOnInit() {
  }

}
