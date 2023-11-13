import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {FrontOfficeRoutingModule} from "./front-office-routing.module";
import {JobListComponent} from './job-list/job-list.component';
import {JobBoardSiteStatsComponent} from './job-board-site-stats/job-board-site-stats.component';
import {HelpedCompaniesComponent} from './helped-companies/helped-companies.component';
import {MobileAppDownloadComponent} from './mobile-app-download/mobile-app-download.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {FrontOfficeComponent} from './front-office/front-office.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ImageModule} from "primeng/image";
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {InputMaskModule} from "primeng/inputmask";
import {ToastModule} from "primeng/toast";
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    HomeComponent,
    JobListComponent,
    JobBoardSiteStatsComponent,
    HelpedCompaniesComponent,
    MobileAppDownloadComponent,
    LoginComponent,
    SignUpComponent,
    AboutUsComponent,
    ContactComponent,
    FrontOfficeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        FrontOfficeRoutingModule,
        ImageModule,
        RippleModule,
        FormsModule,
        InputTextModule,
        PasswordModule,
        DividerModule,
        InputMaskModule,
        ToastModule,
        MenuModule,
        ButtonModule,
        AvatarModule,
        MatMenuModule,
    ]
})
export class FrontOfficeModule {
}
