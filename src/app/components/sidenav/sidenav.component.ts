import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  items = [
    { label: 'Home', icon: '', link: '', linkActiveOpts: { exact: true } },
    { label: 'User List Demo', icon: '', link: './user-list-demo', linkActiveOpts: {} },
    { label: 'Single Node Demo', icon: '', link: './single-node-demo', linkActiveOpts: {} },
    { label: 'Default Demo', icon: '', link: '/default-demo', linkActiveOpts: {} },
    { label: 'On Push Demo', icon: '', link: '/on-push-demo', linkActiveOpts: {} },
    { label: 'Mixed Demo', icon: '', link: '/mixed-demo', linkActiveOpts: {} },
  ];

  routerLinkActive = 'active';

  constructor() {}
}
