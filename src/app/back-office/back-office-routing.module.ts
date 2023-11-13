import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BackOfficeComponent} from "./back-office/back-office.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";

const routes: Routes = [
  {
    path: "", component: BackOfficeComponent,
    children: [
      {path:"dashboard", component: DashboardComponent},
      {path:"account-settings", component: AccountSettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule {
}
