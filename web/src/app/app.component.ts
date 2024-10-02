import { Component } from '@angular/core';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [DefaultHeaderComponent, DefaultFooterComponent, RouterModule]
})
export class AppComponent {
  title = 'Shipping';
}
