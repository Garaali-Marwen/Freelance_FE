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
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import {AvatarModule} from "primeng/avatar";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";



@NgModule({
  declarations: [
    SideNavComponent,
    DashboardComponent,
    BackOfficeComponent,
    HeaderComponent,
    AccountSettingsComponent
  ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        RouterOutlet,
        SidebarModule,
        ButtonModule,
        AccordionModule,
        AvatarModule,
        MatMenuModule,
        FormsModule,
        InputMaskModule,
        PaginatorModule,
        InputTextModule,
        ToastModule
    ]
})
export class BackOfficeModule { }
