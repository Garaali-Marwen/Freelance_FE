import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactComponent} from "./contact/contact.component";
import {JobListComponent} from "./job-list/job-list.component";
import {FrontOfficeComponent} from "./front-office/front-office.component";

const routes: Routes = [
    {
        path: '', component: FrontOfficeComponent,
        children: [
            {path: "", component: HomeComponent},
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignUpComponent},
            {path: 'about', component: AboutUsComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'joblist', component: JobListComponent},
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontOfficeRoutingModule {
}
