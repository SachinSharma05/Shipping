import { Component } from '@angular/core';

@Component({
  selector: 'app-default-sidebar',
  templateUrl: './default-sidebar.component.html',
  styleUrls: ['./default-sidebar.component.css']
})
export class DefaultSidebarComponent {
  navItems = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      iconComponent: { name: 'cil-speedometer' }, // Using CoreUI icons
      badge: {
        color: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Users',
      url: '/users',
      iconComponent: { name: 'cil-people' },
    },
    {
      name: 'Settings',
      url: '/settings',
      iconComponent: { name: 'cil-settings' },
    }
  ];

  constructor() {}
}
