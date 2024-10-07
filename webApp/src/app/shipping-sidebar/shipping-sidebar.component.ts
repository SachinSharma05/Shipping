import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping-sidebar',
  templateUrl: './shipping-sidebar.component.html',
  styleUrl: './shipping-sidebar.component.css'
})
export class ShippingSidebarComponent {
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
      name: 'Track Consignment',
      url: '/trackConsignment',
      iconComponent: { name: 'cil-people' },
    },
    {
      name: 'Locate Us',
      url: '/locate',
      iconComponent: { name: 'cil-settings' },
    },
    {
      name: 'Services',
      url: '/services',
      iconComponent: { name: 'cil-settings' },
    },
    {
      name: 'My Account',
      url: '/account',
      iconComponent: { name: 'cil-settings' },
    },
    {
      name: 'Bookings',
      url: '/bookings',
      iconComponent: { name: 'cil-settings' },
    },
    {
      name: 'Manage Address',
      url: '/address',
      iconComponent: { name: 'cil-settings' },
    },
    {
      name: 'Terms & Conditions',
      url: '/termsConditions',
      iconComponent: { name: 'cil-settings' },
    },
    {
      name: 'Contact Us',
      url: '/contact',
      iconComponent: { name: 'cil-settings' },
    },
    {
      name: 'Sign Up',
      url: '/signup',
      iconComponent: { name: 'cil-settings' },
    }
  ];

  constructor() {}
}
