import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrl: './default-footer.component.css',
  standalone: true
})
export class DefaultFooterComponent extends FooterComponent{
  constructor() {
    super();
  }
}
