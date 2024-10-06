import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule, SidebarModule } from '@coreui/angular';

import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { CommonModule, NgStyle } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultSidebarComponent } from './default-sidebar/default-sidebar.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { HomeComponent } from './home/home.component';
import { NavModule, CollapseModule, NavbarModule, DropdownModule, CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DefaultSidebarComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    HomeComponent
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
    FormModule, InputGroupTextDirective, FormControlDirective, ButtonDirective, IconDirective, NgStyle,
    InputGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective,
    CollapseModule, NavbarModule, DropdownModule, NavModule, CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective,
    SidebarModule, LayoutModule, NavModule, GridModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
