import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/angular.jpg'
    };
    this.slides[1] = {
      src: 'assets/react.jpg'
    };
    this.slides[2] = {
      src: 'assets/vue.jpg'
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  isDropdownOpen: { [key: string]: boolean } = {
    company: false,
    services: false,
    growWithUs: false,
    careers: false,
    contactUs: false,
  };

  toggleDropdown(key: string, isOpen: boolean) {
    this.isDropdownOpen[key] = isOpen;
  }
}
