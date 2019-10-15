import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/_shared/models/breadcrumb.model';

@Component({
  selector: 'app-res-tool',
  templateUrl: './res-tool.component.html',
  styleUrls: ['./res-tool.component.scss']
})
export class ResToolComponent implements OnInit {
  breadcrumbContent: Breadcrumb;
  themeColor = '#87B3BF';

  constructor() {
    this.breadcrumbContent = {
      nodes: [
        '首頁',
        '教案分享',
        '教學工具'
      ]
    };
  }

  ngOnInit() {
  }

}
