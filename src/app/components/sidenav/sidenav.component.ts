import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  items = [
    { label: 'Home', icon: '', link: '', linkActiveOpts: { exact: true } },
    { label: 'Default Demo', icon: '', link: '/default-demo', linkActiveOpts: {} },
    { label: 'On Push Demo', icon: '', link: '/on-push-demo', linkActiveOpts: {} },
  ];

  routerLinkActive = 'active';

  constructor() {}

  ngOnInit(): void {}
}
