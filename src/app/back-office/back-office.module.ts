import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import {RouterOutlet} from "@angular/router";
import {BackOfficeRoutingModule} from "./back-office-routing.module";
import { HeaderComponent } from './header/header.component';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";



@NgModule({
  declarations: [
    SideNavComponent,
    DashboardComponent,
    BackOfficeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    AccordionModule
  ]
})
export class BackOfficeModule { }
