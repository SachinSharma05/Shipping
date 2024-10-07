import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, WidgetStatAComponent } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';
import { ShippingSidebarComponent } from './shipping-sidebar/shipping-sidebar.component';
import { SidebarModule, HeaderModule } from '@coreui/angular';
import { ShippingHeaderComponent } from './shipping-header/shipping-header.component';
import { ShippingDashboardComponent } from './shipping-dashboard/shipping-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShippingSidebarComponent,
    ShippingHeaderComponent,
    ShippingDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective,
    SidebarModule,
    HeaderModule,
    WidgetStatAComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
