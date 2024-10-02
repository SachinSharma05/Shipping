import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, CardModule, FormModule, SidebarModule } from '@coreui/angular';

import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardModule,
    CardGroupComponent,
    ButtonModule,
    FormModule, InputGroupTextDirective, FormControlDirective, ButtonDirective,
    InputGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: []
})
export class AppModule { }
