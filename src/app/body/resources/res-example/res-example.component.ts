import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/_shared/models/breadcrumb.model';

@Component({
  selector: 'app-res-example',
  templateUrl: './res-example.component.html',
  styleUrls: ['./res-example.component.scss']
})
export class ResExampleComponent implements OnInit {
  breadcrumbContent: Breadcrumb;
  themeColor = '#87B3BF';

  constructor() {
    this.breadcrumbContent = {
      nodes: [
        '首頁',
        '教案分享',
        '應用範例'
      ]
    };
  }

  ngOnInit() {
  }

}
